import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cx9tgqb0v {
  fill: currentColor;
  d: path("m19.346 14.808l-.713-.708l1.6-1.6h-3.867v-.98h3.861l-1.594-1.576l.733-.733L22.154 12zM2.866 5.23v-1h10v1zM6.75 17.116h2.23v-2.5h2.5v-2.231h-2.5v-2.5H6.75v2.5h-2.5v2.23h2.5zM1.866 20V7h12v13z");
}
</style><path class="cx9tgqb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:outpatient-med-sharp"} {...others} />);
}

export default Component;
