import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvedy3bot {
  fill: currentColor;
  d: path("M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z");
}
</style><path class="gvedy3bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-flag"} {...others} />);
}

export default Component;
