import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zslz38b1e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.035 9.631q-.686.92-1.215 2.052q-.07.151-.07.317t.07.317q.529 1.132 1.215 2.052q.593 2.343 2.423 4.174q2.71 2.71 6.542 2.71t6.542-2.71q1.83-1.831 2.423-4.174q.686-.92 1.215-2.052q.07-.151.07-.317t-.07-.317q-.529-1.132-1.215-2.052q-.593-2.343-2.423-4.174q-2.71-2.71-6.542-2.71t-6.542 2.71q-1.83 1.831-2.423 4.174");
}
</style><path class="zslz38b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:contact-lens"} {...others} />);
}

export default Component;
