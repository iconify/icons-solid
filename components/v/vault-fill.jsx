import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o92ewjbsf {
  fill: currentColor;
  d: path("M5 2h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-1v1a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m2 9a5 5 0 1 0 10.001-.001A5 5 0 0 0 7 11m7.765-1.167a3.002 3.002 0 0 1-5.529 2.334a3.001 3.001 0 0 1 5.529-2.334M12.01 10H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="o92ewjbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vault-fill"} {...others} />);
}

export default Component;
