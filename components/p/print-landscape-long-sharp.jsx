import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ycmeor3zs {
  fill: currentColor;
  d: path("M14.23 5h1.924v.923h3.165l.681.85l-2.217 6.593H3.523l-.546-.812l2.294-6.631H7.77V5h1.923v.923h4.539zM5 14.385h13.648L20 10.475V18H5z");
}
</style><path class="ycmeor3zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:print-landscape-long-sharp"} {...others} />);
}

export default Component;
