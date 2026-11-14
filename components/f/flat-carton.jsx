import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lb6geccke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h4.75V5.5l1-1H11l1 1V9h9.5v6H12v3.5l-1 1H8.25l-1-1V15H2.5Zm4.75 0v6M12 9v6m4.75-6v6m-9.5-6H12m-4.75 6H12");
}
</style><path class="lb6geccke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flat-carton"} {...others} />);
}

export default Component;
