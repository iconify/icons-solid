import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.padx4eb0o {
  fill: currentColor;
  d: path("M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM224 144h-36.5L93.88 42.57A8 8 0 0 0 88 40H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h36.5l93.62 101.43A8 8 0 0 0 168 216h56a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16");
}
</style><path class="padx4eb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:escalator-down-fill"} {...others} />);
}

export default Component;
