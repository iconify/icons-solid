import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1x3xac2u {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M9.5 16l1.4-1.4L9.3 13h5.4l-1.6 1.6l1.4 1.4l4-4l-4-4l-1.4 1.4l1.6 1.6H9.3l1.6-1.6L9.5 8l-4 4z");
}
</style><path class="f1x3xac2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrows-left-right-circle"} {...others} />);
}

export default Component;
