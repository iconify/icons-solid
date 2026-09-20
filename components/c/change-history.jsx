import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etyl813nq {
  fill: currentColor;
  d: path("M3.808 19L12 5.885L20.192 19z");
}
</style><path class="etyl813nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:change-history"} {...others} />);
}

export default Component;
