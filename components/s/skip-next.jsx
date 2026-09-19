import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u-qcybbwx {
  fill: currentColor;
  d: path("m6 18l8.5-6L6 6zM16 6v12h2V6z");
}
</style><path class="u-qcybbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:skip-next"} {...others} />);
}

export default Component;
