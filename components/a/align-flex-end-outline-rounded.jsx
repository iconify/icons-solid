import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ob5jijb4k {
  fill: currentColor;
  d: path("M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h17q.213 0 .356.144t.144.357t-.144.356T20.5 21zm8.308-4q-.343 0-.576-.232T11 16.192V4.808q0-.343.232-.576T11.808 4h.384q.344 0 .576.232t.232.576v11.384q0 .344-.232.576t-.576.232z");
}
</style><path class="ob5jijb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-flex-end-outline-rounded"} {...others} />);
}

export default Component;
