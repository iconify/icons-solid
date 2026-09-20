import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jr2cli4zn {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zm0-2h16V8H4zm3.25-3.25v1.5q0 .325.213.538T8 15t.538-.213t.212-.537v-1.5h1.5q.325 0 .538-.213T11 12t-.213-.537t-.537-.213h-1.5v-1.5q0-.325-.213-.537T8 9t-.537.213t-.213.537v1.5h-1.5q-.325 0-.537.213T5 12t.213.538t.537.212zM4 16V8z");
}
</style><path class="jr2cli4zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:buttons-alt-outline-rounded"} {...others} />);
}

export default Component;
