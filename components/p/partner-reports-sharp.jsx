import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzeld7bks {
  fill: currentColor;
  d: path("M11 13V3h2v10zm-8 8v-5h2v3h14v-3h2v5zm8-4v-2h2v2z");
}
</style><path class="fzeld7bks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:partner-reports-sharp"} {...others} />);
}

export default Component;
