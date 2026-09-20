import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fl59_0bht {
  fill: currentColor;
  d: path("M8.422 2.764A1 1 0 0 1 9.394 2h1.222a1 1 0 0 1 .966.742L15.384 17H17.5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h2.114c.253-.969.523-1.974.803-3H11.5a.5.5 0 0 0 0-1H5.69l.448-1.63l.102-.37h4.26a.5.5 0 0 0 0-1H6.515c.68-2.478 1.352-4.959 1.907-7.236");
}
</style><path class="fl59_0bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-cone-20-filled"} {...others} />);
}

export default Component;
