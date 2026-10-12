import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sz48uxf3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.97 17.55l2.08-2.08l.71-.71l.71.71l1.06 1.06l.71.71l-.71.71l-2.08 2.08l-.71.71l-.71-.71l-1.06-1.06l-.71-.71zm5.34-6.24l7.62-7.62l.88-.88l.88.88l1.62 1.62l.88.88l-.88.88l-7.62 7.62l-.88.88l-.88-.88l-1.62-1.62l-.88-.88zm2.94.44L17 7");
}
</style><path class="sz48uxf3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nail-file-sharp"} {...others} />);
}

export default Component;
