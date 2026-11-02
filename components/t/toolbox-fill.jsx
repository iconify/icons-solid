import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gao5ygybp {
  fill: currentColor;
  d: path("M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h3a3 3 0 0 1 3 3v3h-5v2h5v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3h5v-2H2v-3a3 3 0 0 1 3-3Zm6-2h-4v2h4ZM9 15h6v-2H9Z");
}
</style><path class="gao5ygybp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toolbox-fill"} {...others} />);
}

export default Component;
