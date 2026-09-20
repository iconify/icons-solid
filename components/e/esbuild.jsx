import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f0r-2x1bp {
  cx: 128px;
  cy: 128px;
  r: 128px;
  fill: var(--svg-color--ffcf00, #ffcf00);
}

.m7mjk89gp {
  fill: var(--svg-color--191919, #191919);
  d: path("M69.285 58.715L138.571 128l-69.286 69.285l-16.97-16.97L104.629 128L52.315 75.685zm76.8 0L215.371 128l-69.286 69.285l-16.97-16.97L181.429 128l-52.314-52.315z");
}
</style><circle class="f0r-2x1bp"/><path class="m7mjk89gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:esbuild"} {...others} />);
}

export default Component;
