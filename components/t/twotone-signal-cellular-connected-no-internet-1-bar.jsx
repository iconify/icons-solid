import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prp8dgy0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V2L2 22h16V8z");
}

.q62uqvtfz {
  fill: currentColor;
  d: path("M20 10v8h2v-8zm-8 12V12L2 22zm8 0h2v-2h-2z");
}
</style><path class="prp8dgy0l"/><path class="q62uqvtfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-signal-cellular-connected-no-internet-1-bar"} {...others} />);
}

export default Component;
