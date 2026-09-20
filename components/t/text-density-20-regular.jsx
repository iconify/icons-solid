import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e4enhkkjd {
  fill: currentColor;
  d: path("M10.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M9 5H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm7.5 0H12v-1h4.5a.5.5 0 0 0 0-1H12v-1h4.5a1.5 1.5 0 0 1 0 3m0-5H12V8h4.5a.5.5 0 0 0 0-1H12V6h4.5a1.5 1.5 0 0 1 0 3");
}
</style><path class="e4enhkkjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-density-20-regular"} {...others} />);
}

export default Component;
