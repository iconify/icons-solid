import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":368};
const content = `<style>.oynqdsb-h {
  fill: var(--svg-color--49a2f8, #49a2f8);
  d: path("M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z");
}
</style><path class="oynqdsb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:stackblitz-icon"} {...others} />);
}

export default Component;
