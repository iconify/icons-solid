import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.omnxp7bqi {
  fill: currentColor;
  d: path("M4.975 19.025Q4.75 18.8 4.75 18.5t.225-.525l13-13q.225-.225.525-.225t.525.225t.225.525t-.225.525l-13 13q-.225.225-.525.225t-.525-.225");
}
</style><path class="omnxp7bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pen-size-1"} {...others} />);
}

export default Component;
