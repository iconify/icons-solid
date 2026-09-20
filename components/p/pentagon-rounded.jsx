import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.un5xx6bvo {
  fill: currentColor;
  d: path("M7.45 21q-.65 0-1.175-.375t-.725-1l-3.075-9.2q-.2-.65 0-1.275t.75-1L10.85 2.8q.525-.35 1.15-.35t1.15.35l7.625 5.35q.55.375.75 1t0 1.275l-3.075 9.2q-.2.625-.725 1T16.55 21z");
}
</style><path class="un5xx6bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pentagon-rounded"} {...others} />);
}

export default Component;
