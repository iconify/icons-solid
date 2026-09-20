import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khnqc1b-j {
  fill: currentColor;
  d: path("M2 22V6h4V2h16v16h-4v4zm6-6h12V4H8zm2-5V9h8v2z");
}
</style><path class="khnqc1b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shadow-minus-sharp"} {...others} />);
}

export default Component;
