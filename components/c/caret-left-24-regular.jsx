import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vhd5bwxgz {
  fill: currentColor;
  d: path("M12.927 18.839c.808.707 2.073.133 2.073-.94V6.101c0-1.074-1.265-1.648-2.073-.94l-6.31 5.521a1.75 1.75 0 0 0 0 2.634zm.573-1.492l-5.896-5.159a.25.25 0 0 1 0-.376L13.5 6.653z");
}
</style><path class="vhd5bwxgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-left-24-regular"} {...others} />);
}

export default Component;
