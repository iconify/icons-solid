import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apwnafbbi {
  fill: var(--svg-color--ffdd35, #ffdd35);
  d: path("M20.393 9.58c1.292-2.616.265-3.892-.704-4.548a2.8 2.8 0 0 0-1.53-.445c-2.24-.016-3.707 1.975-6.206 1.975c-2.361 0-4.04-1.933-6.206-1.975a2.65 2.65 0 0 0-1.884.773c-1.292 1.048-.89 3.235-.355 4.22c1.615 3.267 4.966 9.833 8.445 9.833s7.148-7.223 8.44-9.833");
}
</style><path class="apwnafbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vita"} {...others} />);
}

export default Component;
