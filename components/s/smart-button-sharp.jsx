import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgsuzl05l {
  fill: currentColor;
  d: path("M2 17V7h20v10h-3v-2h1V9H4v6h6v2H2Zm12.5 2l-1.1-2.4l-2.4-1.1l2.4-1.1l1.1-2.4l1.1 2.4l2.4 1.1l-2.4 1.1l-1.1 2.4Zm2.5-5l-.625-1.375L15 12l1.375-.625L17 10l.625 1.375L19 12l-1.375.625L17 14Z");
}
</style><path class="lgsuzl05l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:smart-button-sharp"} {...others} />);
}

export default Component;
