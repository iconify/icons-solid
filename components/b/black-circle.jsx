import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.phm49tbyx {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--3e4347, #3e4347);
}
</style><circle class="phm49tbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:black-circle"} {...others} />);
}

export default Component;
