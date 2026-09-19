import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bjuavhbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.422 15.606l2.17 6.008l-5.376-3.766l-5.145 4.025l1.812-6.31l-5.247-3.91l6.555.087l1.983-6.24l2.07 6.239l6.54.071z");
}

.vcuo19zqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.64 11.825h15.724l-.014 8.596H24.74v4.399h13.7v7.747h-13.7V42.5H14.147V25.566");
}
</style><path class="bjuavhbxp"/><path class="vcuo19zqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:foot-mercato"} {...others} />);
}

export default Component;
