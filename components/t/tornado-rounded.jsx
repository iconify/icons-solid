import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k36li8bag {
  fill: currentColor;
  d: path("M4.135 6.423L5.342 8.5h13.316l1.207-2.077q.46-.807.003-1.615T18.468 4H5.532q-.945 0-1.401.808t.003 1.615M5.915 9.5l2.327 4h7.516l2.327-4zm2.9 5l1.787 3.096q.46.808 1.398.808t1.398-.808l1.787-3.096z");
}
</style><path class="k36li8bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tornado-rounded"} {...others} />);
}

export default Component;
