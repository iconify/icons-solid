import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tkb05wq3e {
  d: path("m12 10.5l-.75 3h1m-2.5 3h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjnrsga9q {
  d: path("M4.25 12a7.75 9.5 0 1 0 15.5 0a7.75 9.5 0 1 0-15.5 0Zm5-2h.01m5.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="yjnrsga9q"/><path class="tkb05wq3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:face"} {...others} />);
}

export default Component;
