import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.s7o43m7hg {
  fill: currentColor;
  d: path("M12.888 11.854c.354.354.646.79.849 1.254a.5.5 0 1 1-.916.401a3.1 3.1 0 0 0-.64-.948a3.033 3.033 0 0 0-4.29 0a3 3 0 0 0-.631.938a.5.5 0 0 1-.916-.401a4 4 0 0 1 .84-1.244a4.033 4.033 0 0 1 5.704 0m-1.925 1.933a1.298 1.298 0 1 1-1.836 1.836a1.298 1.298 0 0 1 1.836-1.836");
}
</style><path class="s7o43m7hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:wifi-3-20-regular"} {...others} />);
}

export default Component;
