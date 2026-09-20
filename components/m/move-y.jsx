import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hyqackb8v {
  d: path("M10 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m4.768 9.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129");
}

.k2ase5h9w {
  d: path("M14.768 6.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409");
}

.k91gmxjhw {
  d: path("M10 16a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.kzgf5zbjd {
  d: path("M5.232 6.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.x16p-1rfc {
  d: path("M5.232 13.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="kzgf5zbjd"/><path class="k2ase5h9w"/><path class="hyqackb8v"/><path class="x16p-1rfc"/><path class="k91gmxjhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:move-y"} {...others} />);
}

export default Component;
