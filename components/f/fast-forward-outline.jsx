import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxz10ebwg {
  fill: currentColor;
  d: path("M2.5 18V6l9 6zm10 0V6l9 6zm-8-3.75L7.9 12L4.5 9.75zm10 0L17.9 12l-3.4-2.25z");
}
</style><path class="kxz10ebwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fast-forward-outline"} {...others} />);
}

export default Component;
