import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o26big_3r {
  fill: currentColor;
  d: path("M2 11.6L9.6 4H4q-.825 0-1.413.588T2 6v5.6Zm0 7L16.575 4H12.4L2 14.425V18.6ZM3.4 20H20q.825 0 1.413-.588T22 18V6q0-.825-.588-1.413T20 4h-.6l-16 16Z");
}
</style><path class="o26big_3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:privacy-screen"} {...others} />);
}

export default Component;
