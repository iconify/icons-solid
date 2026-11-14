import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6r7vvbgy {
  d: path("M7.5 14V8.5L12 4l4.5 4.5V14M12 4v17.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrkzgobft {
  d: path("m3 13l9 2l9-2v6.5l-9 2l-9-2Z");
}
</style><g class="ulnmmdpxh"><path class="vrkzgobft"/><path class="l6r7vvbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pop-up-book"} {...others} />);
}

export default Component;
