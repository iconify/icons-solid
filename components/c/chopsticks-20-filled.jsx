import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.h7izy1s0a {
  fill: currentColor;
  d: path("M4.238 2.074a.5.5 0 0 1 .688.164L9.087 9h1.826L7.074 2.762a.5.5 0 0 1 .852-.524L12.087 9H17.5a.5.5 0 0 1 .5.5v.5a8 8 0 0 1-.252 2H2.252A8 8 0 0 1 2 10v-.5a.5.5 0 0 1 .5-.5h5.413L4.074 2.762a.5.5 0 0 1 .164-.688M10 18a8 8 0 0 1-7.418-5h14.837A8 8 0 0 1 10 18");
}
</style><path class="h7izy1s0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chopsticks-20-filled"} {...others} />);
}

export default Component;
