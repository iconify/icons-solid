import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arcetpbyg {
  fill: currentColor;
  d: path("m12 3l-7 7h4v6h6v-6h4zm1 5v6h-2V8H9.83L12 5.83L14.17 8zM5 18h14v2H5z");
}

.qf862bcub {
  fill: currentColor;
  d: path("M9.83 8H11v6h2V8h1.17L12 5.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="qf862bcub"/><path class="arcetpbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-upload"} {...others} />);
}

export default Component;
