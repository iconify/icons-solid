import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kdko8s6fw {
  fill: currentColor;
  d: path("M184 156h-12V48a12 12 0 0 0-21.37-7.5l-96 120A12 12 0 0 0 64 180h84v28a12 12 0 0 0 24 0v-28h12a12 12 0 0 0 0-24m-36 0H89l59-73.79Z");
}
</style><path class="kdko8s6fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-four-bold"} {...others} />);
}

export default Component;
