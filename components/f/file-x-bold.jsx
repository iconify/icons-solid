import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dp7evac5d {
  fill: currentColor;
  d: path("m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-75.51L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17Z");
}
</style><path class="dp7evac5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:file-x-bold"} {...others} />);
}

export default Component;
