import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n2hbcv4kg {
  fill: currentColor;
  d: path("M14 17V8h9v7h-7zm-9 6V1h14v6h-2V6H7v12h10v-1h2v6z");
}
</style><path class="n2hbcv4kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stream-apps-sharp"} {...others} />);
}

export default Component;
