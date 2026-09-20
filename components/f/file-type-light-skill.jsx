import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.m7r1gybom {
  d: path("m16 2l12.12 7v14L16 30L3.88 23V9z");
}

.q1-5khgoy {
  stroke: var(--svg-color--fff, #fff);
  stroke-width: var(--svg-stroke-width--2-71px, 2.71px);
  d: path("m16 6.97l7.82 4.51v9.04L16 25.03l-7.82-4.51v-9.04z");
}
</style><path class="m7r1gybom"/><path class="q1-5khgoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-light-skill"} {...others} />);
}

export default Component;
