import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chmopnomt {
  cx: 15.2px;
  cy: 8.8px;
  r: 4.8px;
  fill: currentColor;
}

.cjb7gmbqn {
  cx: 14.8px;
  cy: 18px;
  r: 2px;
  fill: currentColor;
}

.f1yfyy14d {
  cx: 7.2px;
  cy: 14.4px;
  r: 3.2px;
  fill: currentColor;
}
</style><circle class="f1yfyy14d"/><circle class="cjb7gmbqn"/><circle class="chmopnomt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:bubble-chart"} {...others} />);
}

export default Component;
