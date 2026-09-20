import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jyem7cb1f {
  fill: currentColor;
  d: path("M1 22V9h2v11h17v2zm4-4V5h5V1h8v4h5v13zm7-13h4V3h-4z");
}
</style><path class="jyem7cb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cases-sharp"} {...others} />);
}

export default Component;
