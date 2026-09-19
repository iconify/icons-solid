import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sew76qbzm {
  fill: currentColor;
  d: path("m12 2l-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M3 21.5h8v-8H3zm2-6h4v4H5z");
}
</style><path class="sew76qbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-category"} {...others} />);
}

export default Component;
