import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.mmt1nqbrc {
  d: path("M9.5 5.5c1.25 0 1.5.75 2.5.75s1.25-.75 2.5-.75c1.5 0 2.25 1.25 2.25 3s-1 2.75-1.25 4.25L15 17c-.25 1.5-1.75 1.5-2 0l-.25-2.75a.781.781 0 0 0-1.5 0L11 17c-.25 1.5-1.75 1.5-2 0l-.5-4.25c-.25-1.5-1.25-2.5-1.25-4.25s.75-3 2.25-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="mmt1nqbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dental-xray"} {...others} />);
}

export default Component;
