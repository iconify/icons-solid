import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hesk4iebv {
  fill: currentColor;
  d: path("M2 22L22 2v6h-4v14zm18.288-.288Q20 21.426 20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22t-.712-.288M20 18v-8h2v8z");
}
</style><path class="hesk4iebv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-connected-no-internet-4-bar-outline"} {...others} />);
}

export default Component;
