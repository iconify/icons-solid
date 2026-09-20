import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m07f954uv {
  fill: currentColor;
  d: path("M192 28a4 4 0 0 0-4 4v36H68V32a4 4 0 0 0-8 0v192a4 4 0 0 0 8 0v-36h120v36a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-4 48v48H68V76ZM68 180v-48h120v48Z");
}
</style><path class="m07f954uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ladder-simple-thin"} {...others} />);
}

export default Component;
