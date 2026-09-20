import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tm8hxmkor {
  fill: currentColor;
  d: path("M5 7.808V19h14V7.808h-4v6.788l-3-1.5l-3 1.5V7.808zM4 20V6.916L6.416 4h11.15L20 6.954V20zM5.38 6.808H18.6L17.077 5H6.904zm4.62 1v5.153l2-1l2 1V7.809zm-5 0h14z");
}
</style><path class="tm8hxmkor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:box-outline-sharp"} {...others} />);
}

export default Component;
