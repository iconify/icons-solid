import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnuy1uyiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.15v13.1M8.5 7.5h7l.9 1.473V10.1H7.6V8.973zm-2.5 5h12l.9 1.5v1.75H5.1V14zm-2.75 5.75h17.5L19.3 20.6l-.463.674l-.817-.024H6.13l-.817.024l-.463-.674ZM12 2.75h4l-1 1.2l1 1.2h-4Z");
}
</style><path class="hnuy1uyiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mast-sail-sharp"} {...others} />);
}

export default Component;
