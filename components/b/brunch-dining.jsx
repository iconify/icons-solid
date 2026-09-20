import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dlfftlbpt {
  fill: currentColor;
  d: path("M3.5 21q-.225 0-.363-.137T3 20.5V20h12.462v.5q0 .225-.138.363t-.362.137zM3 17.616v-.5q0-.225.138-.363t.362-.137h3.73v-1.154h4v1.154h3.732q.225 0 .362.137t.138.363v.5zM18.385 21v-6.215q-.708-.64-1.2-1.535q-.493-.894-.493-2.03V3H21v8.22q0 1.136-.451 2.033t-1.164 1.532V20H21v1zm-.693-12.615H20V4h-2.308z");
}
</style><path class="dlfftlbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:brunch-dining"} {...others} />);
}

export default Component;
