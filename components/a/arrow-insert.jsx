import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngm2qlbef {
  fill: currentColor;
  d: path("M17.6 18L8 8.4V17H6V5h12v2H9.4l9.6 9.6z");
}
</style><path class="ngm2qlbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-insert"} {...others} />);
}

export default Component;
