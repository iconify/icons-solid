import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q83sufb5l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 12q-.001 4.039 2.855 6.896T12 21.753t6.895-2.857T21.75 12q.001-4.039-2.855-6.896T12 2.247q-4.04 0-6.895 2.857Q2.249 7.961 2.25 12m6.5 0q0-3.25 3.25-3.25T15.25 12T12 15.25T8.75 12");
}
</style><path class="q83sufb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:issue"} {...others} />);
}

export default Component;
