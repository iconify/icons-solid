import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y_leiqbhw {
  fill: currentColor;
  d: path("m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm96.48-48.49a36 36 0 1 0-17 17l12 12a12 12 0 0 0 17-17ZM112 148a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="y_leiqbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:file-magnifying-glass-bold"} {...others} />);
}

export default Component;
