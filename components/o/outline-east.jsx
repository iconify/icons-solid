import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5ombpb5y {
  fill: currentColor;
  d: path("m15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z");
}
</style><path class="i5ombpb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-east"} {...others} />);
}

export default Component;
