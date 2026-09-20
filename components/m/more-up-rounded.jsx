import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhst3_bus {
  fill: currentColor;
  d: path("M17.5 6.5h-8q-.213 0-.356-.144T9 5.999t.144-.356T9.5 5.5h8.192q.344 0 .576.232t.232.576v8.73q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357zm-5 5h-8q-.213 0-.356-.144T4 10.999t.144-.356t.356-.143h8.192q.343 0 .576.232t.232.576v8.73q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357z");
}
</style><path class="uhst3_bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:more-up-rounded"} {...others} />);
}

export default Component;
