import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbl3q_hii {
  fill: currentColor;
  d: path("M16 8v8H8V8zm2-2H6v12h12z");
}
</style><path class="sbl3q_hii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-stop"} {...others} />);
}

export default Component;
