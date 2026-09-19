import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9t77fe1k {
  fill: currentColor;
  d: path("M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5l-5-5h7z");
}
</style><path class="r9t77fe1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-functions"} {...others} />);
}

export default Component;
