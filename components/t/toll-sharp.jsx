import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aj1oz6asp {
  fill: currentColor;
  d: path("M9.325 17.675Q7 15.35 7 12t2.325-5.675T15 4t5.675 2.325T23 12t-2.325 5.675T15 20t-5.675-2.325M7 19.75q-2.65-.7-4.325-2.85T1 12t1.675-4.9T7 4.25v2.1q-1.8.625-2.9 2.175T3 12t1.1 3.475T7 17.65z");
}
</style><path class="aj1oz6asp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:toll-sharp"} {...others} />);
}

export default Component;
