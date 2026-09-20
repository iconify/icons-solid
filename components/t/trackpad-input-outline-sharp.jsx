import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmau_db4g {
  fill: currentColor;
  d: path("M14.825 22q-.6 0-1.15-.225t-.975-.65L7.6 16l1.6-1.65l2.8.825V7h2v10.825l-2.45-.7l2.575 2.575q.15.15.325.225t.375.075H19q.825 0 1.413-.587T21 18v-5h2v5q0 1.65-1.175 2.825T19 22zM15 15v-5h2v5zm3 0v-4h2v4zm1 5h-4.875zM2 19V3h19v6h-2V5H4v12h1.8l1.975 2z");
}
</style><path class="dmau_db4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:trackpad-input-outline-sharp"} {...others} />);
}

export default Component;
