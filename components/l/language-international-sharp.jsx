import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xrc4ifbqm {
  fill: currentColor;
  d: path("M1 16V8h2v8zm3 0V8h2l2.225 4.45L8 12.5V8h2v8H8l-2.225-4.45L6 11.5V16zm9 0v-6h-2V8h6v2h-2v6zm5 0V8h2v6h3v2z");
}
</style><path class="xrc4ifbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-international-sharp"} {...others} />);
}

export default Component;
