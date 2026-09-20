import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynvn33bgy {
  fill: currentColor;
  d: path("M5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9h14q1.25 0 2.125.875T22 12t-.875 2.125T19 15zm9-2h5q.425 0 .713-.288T20 12t-.288-.712T19 11h-5z");
}
</style><path class="ynvn33bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sliders-outline-rounded"} {...others} />);
}

export default Component;
