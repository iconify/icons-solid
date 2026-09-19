import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.io9k0vbeq {
  fill: var(--svg-color--fff, #fff);
  d: path("M47 27H37V17H27v10H17v10h10v10h10V37h10z");
}

.yvb0blvjs {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}
</style><circle class="yvb0blvjs"/><path class="io9k0vbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-flag-switzerland"} {...others} />);
}

export default Component;
