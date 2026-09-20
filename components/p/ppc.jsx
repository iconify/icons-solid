import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t687hyaji {
  fill: var(--svg-color--3cb054, #3cb054);
  d: path("M4.688 3c11.798.45 16.342 7.7 14.05 14.18a6.95 6.95 0 0 1-2.78 3.82c.06-.26.127-.52.167-.79c.858-5.05-.761-11.13-8.678-14.49c6.298 3.85 8.843 10.7 5.898 15.12c-5.001.8-8.657-3.58-8.657-8.63z");
}
</style><path class="t687hyaji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ppc"} {...others} />);
}

export default Component;
