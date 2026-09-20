import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3ft3qbpp {
  fill: currentColor;
  d: path("M13.5 15.808L9.692 12L13.5 8.192z");
}
</style><path class="o3ft3qbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-left-outline"} {...others} />);
}

export default Component;
