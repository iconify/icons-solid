import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z58tk59sw {
  fill: currentColor;
  d: path("M3 8V3h18v5zm0 13V10h4.5v11zm13.5 0V10H21v11zm-7 0V10h5v11z");
}
</style><path class="z58tk59sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-chart-sharp"} {...others} />);
}

export default Component;
