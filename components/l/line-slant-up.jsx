import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fenq5cbte {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M.808 19.193a1 1 0 0 1 0-1.415L17.778.808a1 1 0 1 1 1.414 1.414l-16.97 16.97a1 1 0 0 1-1.414 0");
}
</style><path clip-rule="evenodd" class="fenq5cbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:line-slant-up"} {...others} />);
}

export default Component;
