import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgyw0yb9x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 4.75q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5T8 4.75M15.5 7q-3.25 0-3.25 3.25t3.25 3.25t3.25-3.25T15.5 7M5.25 17.25q0-1.76 1.245-3.005T9.5 13t3.005 1.245t1.245 3.005t-1.245 3.005T9.5 21.5t-3.005-1.245T5.25 17.25");
}
</style><path class="pgyw0yb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:carbonated"} {...others} />);
}

export default Component;
