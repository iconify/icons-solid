import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7bqz_bwk {
  fill: currentColor;
  d: path("M12.8 23q-2.05 0-3.85-.937T6 19.45L1.2 12.4l1.675-1.675L7 13.575V3h2v9h2V1h2v11h2V2h2v10h2V4h2v10.8q0 3.425-2.387 5.813T12.8 23");
}
</style><path class="q7bqz_bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:back-hand-sharp"} {...others} />);
}

export default Component;
