import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9l0vg2sj {
  fill: currentColor;
  d: path("M14 17V6H2V1h16v6.5l4-4v11l-4-4V17zm-2 3H3.625L0 16.4L1.4 15L3 16.6V8.5h1.5V13h1V7H7v6h1V8h1.5v5h1V9H12z");
}
</style><path class="s9l0vg2sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tamper-detection-on-sharp"} {...others} />);
}

export default Component;
