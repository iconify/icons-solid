import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8c7ptnej {
  fill: currentColor;
  d: path("M7 22v-5H2v-4h6.45l1.7 2.575h1.8l1.35-4.325L14.45 13H22v4h-5v5zm3.7-9.25L9.525 11H2V7h5V2h10v5h5v4h-6.475l-1.7-2.55H12.05z");
}
</style><path class="z8c7ptnej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-metrics-sharp"} {...others} />);
}

export default Component;
