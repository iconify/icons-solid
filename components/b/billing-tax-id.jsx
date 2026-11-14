import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq9spvbgv {
  d: path("M11.178 21H3.5V2.5H12L17.5 8v3.722");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wed047bha {
  d: path("M12 2.5V8h5.5m-11 3H13m-6.5 4h4m6.5-.5l-.75 7m4-7l-.75 7m-5-4.75h7M14 19.5h7");
}
</style><g class="ulnmmdpxh"><path class="fq9spvbgv"/><path class="wed047bha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:billing-tax-id"} {...others} />);
}

export default Component;
