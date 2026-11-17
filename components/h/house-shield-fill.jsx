import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uc07j2b8y {
  fill: currentColor;
  d: path("M18 22H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3m-8-11a2 2 0 0 0-2 2v1c0 1.087.283 2.142.969 3c.676.844 1.629 1.417 2.584 1.894a1 1 0 0 0 .894 0C14.546 17.845 15.999 16.581 16 14v-1a2 2 0 0 0-2-2Z");
}
</style><path class="uc07j2b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-shield-fill"} {...others} />);
}

export default Component;
