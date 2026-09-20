import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrd3w3bsx {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm11-3h5v-5.5h1V10h-2.5V9h-2v1H12v1.5h1zm1.5-1.5v-4h2v4z");
}
</style><path class="nrd3w3bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:folder-delete-sharp"} {...others} />);
}

export default Component;
