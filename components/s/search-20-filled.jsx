import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.t7a3y70wr {
  fill: currentColor;
  d: path("M13.535 14.596a6.5 6.5 0 1 1 1.06-1.06l3.435 3.434a.75.75 0 0 1-.976 1.133l-.084-.073zM14.5 9.5a5 5 0 1 0-10 0a5 5 0 0 0 10 0");
}
</style><path class="t7a3y70wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:search-20-filled"} {...others} />);
}

export default Component;
