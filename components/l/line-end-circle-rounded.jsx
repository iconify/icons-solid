import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_blm5b1u {
  fill: currentColor;
  d: path("M16 16.423q-1.73 0-2.97-1.127T11.614 12.5H3.576q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h8.037q.176-1.67 1.416-2.796Q14.27 7.577 16 7.577q1.843 0 3.133 1.29t1.29 3.135t-1.29 3.132T16 16.423");
}
</style><path class="h_blm5b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-circle-rounded"} {...others} />);
}

export default Component;
