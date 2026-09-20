import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jk42opb5j {
  fill: currentColor;
  d: path("M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><path class="jk42opb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-small-24-regular"} {...others} />);
}

export default Component;
