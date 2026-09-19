import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uwl10ab9j {
  fill: currentColor;
  d: path("M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM20 4v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z");
}
</style><path class="uwl10ab9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-comment"} {...others} />);
}

export default Component;
