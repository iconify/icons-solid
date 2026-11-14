import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrt062h2m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m10.444 6.526l-.761 1.903q-.358.896-1.254 1.254l-1.903.761q-1.165.467-2.053-.421t-.421-2.053l.761-1.903q.358-.896 1.254-1.254l1.903-.761q1.165-.467 2.053.421t.421 2.053");
}
</style><path class="vrt062h2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:compass"} {...others} />);
}

export default Component;
