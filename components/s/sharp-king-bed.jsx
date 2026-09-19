import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhgy9cx9j {
  fill: currentColor;
  d: path("M20 10V5H4v5H2v7h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-7zm-9 0H6V7h5zm7 0h-5V7h5z");
}
</style><path class="nhgy9cx9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-king-bed"} {...others} />);
}

export default Component;
