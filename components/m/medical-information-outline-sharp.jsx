import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pv7si3bzt {
  fill: currentColor;
  d: path("M7 18h2v-2h2v-2H9v-2H7v2H5v2h2zm6-3.5h6V13h-6zm0 3h4V16h-4zM2 22V7h7V2h6v5h7v15zm2-2h16V9h-5v2H9V9H4zm7-11h2V4h-2zm1 5.5");
}
</style><path class="pv7si3bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:medical-information-outline-sharp"} {...others} />);
}

export default Component;
