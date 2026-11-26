import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fo6wfzb7s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 4L19 4C21.2092 4 23 5.7908 23 8L23 11C23 11.9443 22.5554 12.8334 21.8 13.4L13.8 19.4C12.7333 20.2 11.2667 20.2 10.2 19.4L2.2 13.4C1.4446 12.8334 1 11.9443 1 11L1 8C1 5.7908 2.7908 4 5 4Z");
}
</style><path clip-rule="evenodd" class="fo6wfzb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flow-off-page-fill"} {...others} />);
}

export default Component;
