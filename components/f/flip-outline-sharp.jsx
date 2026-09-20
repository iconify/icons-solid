import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.indgsqbax {
  fill: currentColor;
  d: path("M15 5V3h2v2zm0 16v-2h2v2zm4-16V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zM9 21H3V3h6v2H5v14h4zm2 2V1h2v22z");
}
</style><path class="indgsqbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flip-outline-sharp"} {...others} />);
}

export default Component;
