import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.kouv-mz8z {
  fill: none;
  d: path("M8 14V4H2h12m14 18v8m-8 0V20h6");
}

.m_6i3tbwd {
  stroke: var(--svg-color--dedede, #dedede);
  stroke-width: var(--svg-stroke-width--4px, 4px);
}

.pbgzjtzrn {
  d: path("M20 4v8h8V4zM4 20v8h8v-8z");
}
</style><g class="m_6i3tbwd"><path class="pbgzjtzrn"/><path class="kouv-mz8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-toon"} {...others} />);
}

export default Component;
