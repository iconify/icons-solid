import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dog7o_b7z {
  fill: currentColor;
  d: path("M20.99 14.04V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10.05c.28 1.92 2.1 3.35 4.18 2.93c1.34-.27 2.43-1.37 2.7-2.71c.25-1.24-.16-2.39-.94-3.18m-2-9.04L12 8.5L5 5zm-3.64 10H5V7l7 3.5L19 7v6.05c-.16-.02-.33-.05-.5-.05c-1.39 0-2.59.82-3.15 2m5.15 2h-4v-1h4z");
}
</style><path class="dog7o_b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-unsubscribe"} {...others} />);
}

export default Component;
