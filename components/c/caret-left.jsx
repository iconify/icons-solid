import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7lbw2bbe {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m8.174 10.351l3.295-3.06q1.079-1.003 2.43-.414T15.25 8.94v6.12q0 1.474-1.351 2.063t-2.43-.415l-3.295-3.059q-.719-.668-.719-1.649t.719-1.649");
}
</style><path class="m7lbw2bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:caret-left"} {...others} />);
}

export default Component;
