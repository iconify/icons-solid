import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zv27f4bdp {
  fill: currentColor;
  d: path("M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 16H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4zM8 19h10v2H8z");
}
</style><path class="zv27f4bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-flight-class"} {...others} />);
}

export default Component;
