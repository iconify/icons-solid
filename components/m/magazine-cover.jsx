import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6nyy1bpi {
  d: path("M3.5 2.5h14v19h-14Zm17 3v13m-14-12h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uow03nbcq {
  d: path("M8 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2.5 9.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}
</style><g class="ulnmmdpxh"><path class="h6nyy1bpi"/><path class="uow03nbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:magazine-cover"} {...others} />);
}

export default Component;
