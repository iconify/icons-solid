import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z4ay1-b9r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm7 5q2.641 0 3.136 2.146q.776-.164 1.611.189q1.432.605 1.651 2.144q.22 1.538-.984 2.52q-1.151.938-2.537.501H9.123q-1.386.437-2.537-.501q-1.204-.982-.984-2.52t1.651-2.144q.835-.353 1.611-.189Q9.359 9.25 12 9.25");
}
</style><path class="z4ay1-b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:resource-group"} {...others} />);
}

export default Component;
