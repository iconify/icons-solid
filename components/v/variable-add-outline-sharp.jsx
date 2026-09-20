import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k6ev2xq7y {
  fill: currentColor;
  d: path("M14 16H4V8h16v2h-1V9H5v6h9zm-9-1V9zm14 4v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="k6ev2xq7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variable-add-outline-sharp"} {...others} />);
}

export default Component;
