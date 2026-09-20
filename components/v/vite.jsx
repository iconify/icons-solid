import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xa41frb-w {
  fill: var(--svg-color--007aff, #007aff);
  d: path("m3 7.725l5.625-1.35l-.563 14.063zm6.75-1.524L21 3.563L8.231 20.274L9.75 6.206z");
}
</style><path class="xa41frb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vite"} {...others} />);
}

export default Component;
