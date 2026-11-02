import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5gmqgb7z {
  fill: currentColor;
  d: path("M11 3c1.039 0 1.992.578 2.707 1.293l6 6a2.414 2.414 0 0 1 0 3.414l-6 6a2.414 2.414 0 0 1-3.414 0l-6-6C3.578 12.992 3 12.039 3 11V6a3 3 0 0 1 3-3ZM7.158 8.221a2 2 0 1 0 3.684 1.558A2 2 0 0 0 7.158 8.22");
}
</style><path class="h5gmqgb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tag-fill"} {...others} />);
}

export default Component;
