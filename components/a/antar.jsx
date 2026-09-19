import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w5bzoy1lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.011 43.5l-6.037-2.959h-12.15c-6.293-.07-12.368-3.443-15.612-9.355c-4.786-8.725-1.593-19.678 7.132-24.465a18 18 0 0 1 8.65-2.221h0c9.962.01 18.027 8.094 18.018 18.056zm-6.037-9.025V17.794");
}
</style><path class="w5bzoy1lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:antar"} {...others} />);
}

export default Component;
