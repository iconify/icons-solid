import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.f0goeqbfj {
  fill: var(--svg-color--c5c5c5, #c5c5c5);
  d: path("M2 15v5h9v4l7-7l-7-6v4z");
}

.jw_yhbbxl {
  fill: var(--svg-color--c5c5c5, #c5c5c5);
  d: path("M20.414 2H5v28h22V8.586ZM7 28V4h12v6h6v18Z");
}

.slibqdbmi {
  fill: var(--svg-color--gray, gray);
  d: path("M26 29H6V3h14l6 6z");
}
</style><path class="slibqdbmi"/><path class="jw_yhbbxl"/><path class="f0goeqbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-inc"} {...others} />);
}

export default Component;
