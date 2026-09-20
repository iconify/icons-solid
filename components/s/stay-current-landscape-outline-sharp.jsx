import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn0c1yuif {
  fill: currentColor;
  d: path("M1 19V5h22v14zm3-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1z");
}
</style><path class="jn0c1yuif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stay-current-landscape-outline-sharp"} {...others} />);
}

export default Component;
