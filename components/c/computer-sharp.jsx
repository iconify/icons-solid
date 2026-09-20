import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ieou1ts7p {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm1-3V3h20v15z");
}
</style><path class="ieou1ts7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:computer-sharp"} {...others} />);
}

export default Component;
