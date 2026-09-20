import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lex20mbqb {
  fill: currentColor;
  d: path("M16.5 20v-5.884h-10v-8.2l-2.1 2.1l-.708-.708L7 4l3.308 3.308l-.708.708l-2.1-2.1v7.2h10V20z");
}
</style><path class="lex20mbqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-sharp-left-sharp"} {...others} />);
}

export default Component;
