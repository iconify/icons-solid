import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ityh9rmws {
  fill: var(--svg-color--d0d2d3, #d0d2d3);
  d: path("M49.717 44.915a3.55 3.55 0 0 1-3.549 3.552H20.332a3.55 3.55 0 0 1-3.548-3.552V19.083a3.55 3.55 0 0 1 3.548-3.551h25.836a3.55 3.55 0 0 1 3.549 3.551z");
}
</style><path class="ityh9rmws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:white-medium-small-square"} {...others} />);
}

export default Component;
