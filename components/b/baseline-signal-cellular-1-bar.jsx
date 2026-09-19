import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mnumfnbbo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M2 22h20V2z");
}

.srjh0dbvs {
  fill: currentColor;
  d: path("M12 12L2 22h10z");
}
</style><path class="mnumfnbbo"/><path class="srjh0dbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-signal-cellular-1-bar"} {...others} />);
}

export default Component;
