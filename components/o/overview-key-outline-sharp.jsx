import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edw4rna9l {
  fill: currentColor;
  d: path("M1 19V5h14v14zm2-2h10V7H3zm14 2V5h2v14zm4 0V5h2v14zM3 17V7z");
}
</style><path class="edw4rna9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:overview-key-outline-sharp"} {...others} />);
}

export default Component;
