import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fs9qbqb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.07 25.06L19.61 5.5v10.031h3.01v9.53h-3.01v7.022c.501.867 2.507.87 3.01 0v6.52c0 5.02-11.034 6.022-11.034-2.006V25.06zm19.31 0L38.92 5.5v10.031h3.01v9.53h-3.01v7.022c.501.867 2.507.87 3.01 0v6.52c0 5.02-11.035 6.022-11.035-2.006V25.06z");
}
</style><path class="fs9qbqb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tuoi-tre"} {...others} />);
}

export default Component;
