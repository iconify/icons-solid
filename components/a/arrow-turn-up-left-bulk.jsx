import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3uottbwk {
  fill: currentColor;
  d: path("M9.414 7H15a3 3 0 0 1 3 3v11a1 1 0 0 1-2 0V10a.997.997 0 0 0-1-1H9.414l3.293 3.293a.999.999 0 1 1-1.414 1.414l-5-5a.997.997 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="r3uottbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-up-left-bulk"} {...others} />);
}

export default Component;
