import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aeozgzz2d {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2h8q.825 0 1.413.588T22 4v8q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12V4h-8Q8.65 4 6.325 6.325T4 12t2.325 5.675T12 20m-5-5h7v-2l3 2V9l-3 2V9H7zm5-3");
}
</style><path class="aeozgzz2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:duo-outline-rounded"} {...others} />);
}

export default Component;
