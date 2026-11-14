import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lyow673uq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.75h12q2.25 0 2.25 2.25T18 7.25H7.75v9.5H18q2.25 0 2.25 2.25T18 21.25H6q-2.25 0-2.25-2.25T6 16.75h.25v-9.5H6Q3.75 7.25 3.75 5T6 2.75");
}
</style><path class="lyow673uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:c-table"} {...others} />);
}

export default Component;
