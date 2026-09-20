import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ba-b4lb8p {
  fill: currentColor;
  d: path("M3 21V3h2v16h16v2zm3-3V9h4v9zm5 0V4h4v14zm5 0v-5h4v5z");
}
</style><path class="ba-b4lb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:finance-sharp"} {...others} />);
}

export default Component;
