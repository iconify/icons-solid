import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a76f9pbct {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20H2Zm2-2h12V6H4v12Zm0 0V6v12Zm6-2l1.25-2.75L14 12l-2.75-1.25L10 8l-1.25 2.75L6 12l2.75 1.25L10 16Z");
}
</style><path class="a76f9pbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-videocam-outline-sharp"} {...others} />);
}

export default Component;
