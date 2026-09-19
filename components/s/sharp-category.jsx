import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tv5w3ab-g {
  fill: currentColor;
  d: path("M3 13.5h8v8H3z");
}

.u1l7rqbek {
  cx: 17.5px;
  cy: 17.5px;
  r: 4.5px;
  fill: currentColor;
}

.vq4wcu2jz {
  fill: currentColor;
  d: path("m12 2l-5.5 9h11z");
}
</style><path class="vq4wcu2jz"/><circle class="u1l7rqbek"/><path class="tv5w3ab-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-category"} {...others} />);
}

export default Component;
