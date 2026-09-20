import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y437t3bqn {
  fill: currentColor;
  d: path("m12 23l-3-3H3V2h18v18h-6l-3 3Zm1.55-10.45L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16l1.55-3.45Z");
}
</style><path class="y437t3bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:assistant-sharp"} {...others} />);
}

export default Component;
