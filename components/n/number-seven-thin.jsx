import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.za5icjbuz {
  fill: currentColor;
  d: path("m171.83 49.15l-48 160A4 4 0 0 1 120 212a3.8 3.8 0 0 1-1.15-.17a4 4 0 0 1-2.68-5L162.62 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.83 5.15");
}
</style><path class="za5icjbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-seven-thin"} {...others} />);
}

export default Component;
