import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccuj2ebdj {
  fill: currentColor;
  d: path("M2 20V4h20v16zM4 8h16V6H4zm11.775 6.075L20 10.525V10H4v1.225z");
}
</style><path class="ccuj2ebdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wallet-sharp"} {...others} />);
}

export default Component;
