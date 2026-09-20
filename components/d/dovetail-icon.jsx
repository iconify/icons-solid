import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":293};
const content = `<style>.z9u1asblt {
  fill: var(--svg-color--230078, #230078);
  d: path("m256 182.857l-64 36.572v-73.143l-64-36.974l64-36.17l64 36.572zm-128.01-73.143l-64 36.572V73.143L0 36.57L64 0l63.99 36.571zm0 146.286l-64 36.571l.01-73.142l-64-36.572l63.99-36.571l64 36.571z");
}
</style><path class="z9u1asblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:dovetail-icon"} {...others} />);
}

export default Component;
