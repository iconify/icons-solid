import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6nj4bcio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.299 19.399L10.5 18.5v-6l-7.25-9h17.5l-7.25 9v3.143m0 .2v1.9m2.75-1.993a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-1.5 5.75c0-1.75 1.5-2.75 3.25-2.75s3.25 1 3.25 2.75");
}
</style><path class="o6nj4bcio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:talent-pipeline"} {...others} />);
}

export default Component;
