import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.koymt7bfv {
  fill: currentColor;
  d: path("M3 16V8h18v8zm1-1h16V9H4zm0 0V9z");
}
</style><path class="koymt7bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-21-9-outline-sharp"} {...others} />);
}

export default Component;
