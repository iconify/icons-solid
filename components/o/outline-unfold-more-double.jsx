import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uugzbugwv {
  fill: currentColor;
  d: path("M12 7.83L15.17 11l1.41-1.41L12 5L7.41 9.59L8.83 11zm0-5L15.17 6l1.41-1.41L12 0L7.41 4.59L8.83 6zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13z");
}
</style><path class="uugzbugwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-unfold-more-double"} {...others} />);
}

export default Component;
