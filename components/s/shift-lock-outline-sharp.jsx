import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xqkagcber {
  fill: currentColor;
  d: path("M8 18v-5H3l9-11l9 11h-5v5zm2-2h4v-5h2.775L12 5.15L7.225 11H10zm-6 6v-2h16v2z");
}
</style><path class="xqkagcber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift-lock-outline-sharp"} {...others} />);
}

export default Component;
