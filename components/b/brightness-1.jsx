import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i4hxffrur {
  cx: 12px;
  cy: 12px;
  r: 10px;
  fill: currentColor;
}
</style><circle class="i4hxffrur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:brightness-1"} {...others} />);
}

export default Component;
