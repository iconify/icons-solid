import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.miahkbuqp {
  fill: currentColor;
  d: path("M2.54 2.304A.5.5 0 0 1 3 2h9.5a.5.5 0 1 1 0 1H4.171l4.074 4.253a.5.5 0 0 1 .024.665L4.063 13H12.5a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.385-.819l4.6-5.558l-4.576-4.777a.5.5 0 0 1-.099-.542");
}
</style><path class="miahkbuqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:autosum-16-regular"} {...others} />);
}

export default Component;
