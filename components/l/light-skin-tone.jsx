import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.o6fhpyk-a {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ffe1bd, #ffe1bd);
}
</style><circle class="o6fhpyk-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:light-skin-tone"} {...others} />);
}

export default Component;
