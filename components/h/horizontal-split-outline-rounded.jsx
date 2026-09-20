import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.os778005m {
  fill: currentColor;
  d: path("M4.808 18q-.343 0-.576-.232T4 17.192v-4.384q0-.344.232-.576T4.808 12h14.384q.344 0 .576.232t.232.576v4.384q0 .343-.232.576t-.576.232zM4.5 10q-.213 0-.356-.144T4 9.499t.144-.356T4.5 9h15q.213 0 .356.144t.144.357t-.144.356T19.5 10zm0-3q-.213 0-.356-.144T4 6.499t.144-.356T4.5 6h15q.213 0 .356.144t.144.357t-.144.356T19.5 7z");
}
</style><path class="os778005m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-split-outline-rounded"} {...others} />);
}

export default Component;
