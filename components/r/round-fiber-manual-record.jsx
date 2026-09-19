import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rnr15yq7m {
  cx: 12px;
  cy: 12px;
  r: 8px;
  fill: currentColor;
}
</style><circle class="rnr15yq7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-fiber-manual-record"} {...others} />);
}

export default Component;
