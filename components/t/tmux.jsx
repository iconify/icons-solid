import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vw66cac-f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 2.75H6.875q-2.123 0-3.624 1.501T1.75 7.875v8.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-8.25q0-2.123-1.501-3.624T17.125 2.75M8.53 11.47q.106.105.163.243T8.75 12t-.057.287t-.163.243l-2.5 2.5q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243T4.75 14.5t.057-.287t.163-.243L6.939 12L4.97 10.03q-.106-.105-.163-.243T4.75 9.5t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094z");
}
</style><path class="vw66cac-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:tmux"} {...others} />);
}

export default Component;
