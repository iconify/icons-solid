import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.csbd4hb8y {
  fill: currentColor;
  d: path("M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M44 68h168v48h-76a12 12 0 0 0-12 12v60H44Zm104 120v-48h64v48Z");
}
</style><path class="csbd4hb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:picture-in-picture-bold"} {...others} />);
}

export default Component;
