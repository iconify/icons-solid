import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh1w3bcxl {
  fill: currentColor;
  d: path("m17.342 9.447l-2.895-5.789l1.106-.552a3.234 3.234 0 0 1 4.341 1.447a3.234 3.234 0 0 1-1.447 4.341Zm-7.578 3.789l-1.317.658a3.236 3.236 0 1 1-2.894-5.788l7.105-3.553l2.895 5.789l-2.211 1.105l4.552 9.106a1 1 0 1 1-1.788.894L12 13.236l-4.106 8.211a1 1 0 1 1-1.788-.894Z");
}
</style><path class="dh1w3bcxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telescope-fill"} {...others} />);
}

export default Component;
