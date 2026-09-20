import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmyft4pud {
  fill: currentColor;
  d: path("M8 19V5l11 7z");
}
</style><path class="gmyft4pud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-arrow"} {...others} />);
}

export default Component;
