import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t9x8lz15h {
  fill: currentColor;
  d: path("M9 2v20H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm2 7V2h8a3 3 0 0 1 3 3v4Zm4 13h-4V11h4Zm7-11v8a3 3 0 0 1-3 3h-2V11Z");
}
</style><path class="t9x8lz15h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-treemap-fill"} {...others} />);
}

export default Component;
