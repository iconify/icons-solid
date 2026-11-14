import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wo0tkxy8n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m20.248 4.812l-8.309 8.309l1.591 1.592q1.944 1.944 0 3.888t-3.888 0l-4.243-4.243q-1.944-1.944 0-3.888t3.888 0l1.592 1.591l8.309-8.309q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243");
}
</style><path class="wo0tkxy8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:curling-brush"} {...others} />);
}

export default Component;
