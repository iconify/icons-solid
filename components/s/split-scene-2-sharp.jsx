import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3qy9xntt {
  fill: currentColor;
  d: path("M4 21v-6h16v6zm-2-8v-2h2V3h16v8h2v2z");
}
</style><path class="o3qy9xntt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-2-sharp"} {...others} />);
}

export default Component;
