import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kb7knmrfr {
  fill: currentColor;
  d: path("M21.99 2H2v16h16l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z");
}
</style><path class="kb7knmrfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-comment"} {...others} />);
}

export default Component;
