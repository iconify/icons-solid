import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rqvb2ebzo {
  fill: currentColor;
  d: path("m12.566 15.03l1.926-1.926q.197-.196.096-.448t-.384-.252H9.799q-.276 0-.382.252t.092.449l1.932 1.932q.236.236.559.236t.566-.242M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zM5 9v9.385q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9z");
}
</style><path class="rqvb2ebzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:top-panel-open-rounded"} {...others} />);
}

export default Component;
