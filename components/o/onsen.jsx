import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.egpp2kbdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.788 24.99c5.577 2.43 7.245 6.087 4.227 9.263S31.887 39.5 24 39.5S9.003 37.429 5.985 34.253s-1.35-6.832 4.227-9.263");
}

.t2in9bcjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.729 8.5c-11.654 11.654 9.158 9.841-4 23m-3.499-23c-11.654 11.654 9.158 9.841-4 23m18.999-23c-11.654 11.654 9.158 9.841-4 23");
}
</style><path class="egpp2kbdi"/><path class="t2in9bcjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:onsen"} {...others} />);
}

export default Component;
