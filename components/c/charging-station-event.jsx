import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0ytwi1se {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.125 1.75h-4.25q-2.123 0-3.624 1.501T4.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h4.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T14.125 1.75m-3.321 6.104q.636-.914 1.674-.511t.89 1.508l-.155 1.141q-.041.3.159.529q.199.229.502.229q.97-.001 1.42.858t-.102 1.655l-1.996 2.883q-.636.914-1.674.511t-.89-1.508l.155-1.141q.041-.3-.159-.529q-.199-.229-.502-.229q-.97.001-1.42-.858t.102-1.655z");
}
</style><path class="m0ytwi1se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:charging-station-event"} {...others} />);
}

export default Component;
