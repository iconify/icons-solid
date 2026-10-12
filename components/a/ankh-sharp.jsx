import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iauc_57wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-2-1.25-3.5-3.25-3.5-5a3.5 3.5 0 0 1 7 0c0 1.75-1.5 3.75-3.5 5Zm0 0v8.25m-6.5-7.5h13");
}
</style><path class="iauc_57wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ankh-sharp"} {...others} />);
}

export default Component;
