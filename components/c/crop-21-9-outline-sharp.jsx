import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmin4jbct {
  fill: currentColor;
  d: path("M2 17V7h20v10zm2-2h16V9H4zm0 0V9z");
}
</style><path class="tmin4jbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-21-9-outline-sharp"} {...others} />);
}

export default Component;
