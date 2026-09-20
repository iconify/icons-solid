import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mishuptin {
  fill: currentColor;
  d: path("M19.8 22.6L17.15 20H6.5q-2.3 0-3.9-1.6T1 14.5q0-1.925 1.188-3.425T5.25 9.15q.075-.2.15-.387t.15-.413L1.4 4.2l1.4-1.4l18.4 18.4zm1.8-3.85L8.05 5.225q.875-.6 1.863-.912T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 .975-.375 1.813T21.6 18.75");
}
</style><path class="mishuptin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cloud-off"} {...others} />);
}

export default Component;
