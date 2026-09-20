import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pf8_zfb-z {
  fill: currentColor;
  d: path("M8 16.423q-1.843 0-3.133-1.29t-1.29-3.135t1.29-3.132T8 7.576q1.73 0 2.97 1.127t1.416 2.796h8.037q.213 0 .356.144t.144.357t-.144.356t-.356.143h-8.036q-.178 1.67-1.417 2.796Q9.73 16.423 8 16.423");
}
</style><path class="pf8_zfb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-circle-rounded"} {...others} />);
}

export default Component;
