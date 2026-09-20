import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jcem6-bqg {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10z");
}
</style><path class="jcem6-bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-full-alt-outline-sharp"} {...others} />);
}

export default Component;
