import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kaur9qy6g {
  fill: currentColor;
  d: path("M7.221 21q-1.767 0-3.008-1.236T2.97 16.77q0-1.358.767-2.43t1.966-1.531H3v-1h4.539v4.538h-1v-2.771q-1.118.237-1.843 1.127t-.725 2.046q0 1.364.947 2.308q.948.944 2.303.944zm2.702-1v-1H19V5H5v4.423H4V4h16v16zm0-3.5H13.5v-1H9.923zm0-4H16.5v-1H9.923zM7.5 8.5h9v-1h-9z");
}
</style><path class="kaur9qy6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:article-shortcut-outline-sharp"} {...others} />);
}

export default Component;
