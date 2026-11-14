import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwi-shbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.331 0 .653.018M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.5 7.5h8m-5.25 0v-1.75h2.5v1.75m-4.25 0h6l-.75 7.5h-4.5Zm2.25 2.5v2.5m1.5-2.5v2.5");
}
</style><path class="cwi-shbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:account-delete"} {...others} />);
}

export default Component;
