import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmwa2yq9t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.083 6.712L3.734 8.87h-.001q-2.474.349-2.127 2.823q.347 2.476 2.823 2.129l4.987-.701q-.217.17-.421.374Q7.75 14.74 7.75 16.5t1.245 3.005T12 20.75t3.005-1.245T16.25 16.5t-1.245-3.005q-.647-.648-1.434-.958l6.209-.873q2.474-.349 2.127-2.823q-.144-1.026-.971-1.65q-.828-.623-1.853-.479");
}
</style><path class="mmwa2yq9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:balance-board"} {...others} />);
}

export default Component;
