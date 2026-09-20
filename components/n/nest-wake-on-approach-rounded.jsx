import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3kpchbbs {
  fill: currentColor;
  d: path("M19.438 11.563Q19 11.125 19 10.5v-6q0-.625.438-1.062T20.5 3t1.063.438T22 4.5v6q0 .625-.437 1.063T20.5 12t-1.062-.437m-12.263-.738Q6 9.65 6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12t-2.825-1.175M2 20v-2.8q0-.85.425-1.562T3.6 14.55q1.5-.75 3.113-1.15T10 13t3.288.4t3.112 1.15q.75.375 1.175 1.088T18 17.2V20z");
}
</style><path class="b3kpchbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nest-wake-on-approach-rounded"} {...others} />);
}

export default Component;
