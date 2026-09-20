import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.camsl8b8v {
  fill: var(--svg-color--0af, #0af);
  d: path("M2.004 2.02h9.625l12.25 28h-8.75z");
}

.es6h2ounk {
  fill: var(--svg-color--navy, navy);
  d: path("m17.754 16.02l6.125 14h-8.75z");
}

.jc3w8o3ud {
  fill: var(--svg-color--ff0080, #ff0080);
  d: path("M20.38 2.02h9.624l-6.125 28h-8.75z");
}

.nn06kfvxk {
  stroke-width: var(--svg-stroke-width--0-875px, 0.875px);
}
</style><g class="nn06kfvxk"><path class="camsl8b8v"/><path class="jc3w8o3ud"/><path class="es6h2ounk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-vento"} {...others} />);
}

export default Component;
