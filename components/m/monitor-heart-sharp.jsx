import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imhrn7p4k {
  fill: currentColor;
  d: path("M2 11V4h20v7h-5.375l-1.95-3.9h-1.35L10 13.75L8.625 11zm0 9v-7h5.375l1.95 3.9h1.35L14 10.25L15.375 13H22v7z");
}
</style><path class="imhrn7p4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:monitor-heart-sharp"} {...others} />);
}

export default Component;
