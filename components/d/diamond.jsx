import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvy53sl2l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.386 3.826l5.788 5.788q2.386 2.386 0 4.772l-5.788 5.788q-2.386 2.386-4.772 0l-5.788-5.788Q1.44 12 3.826 9.614l5.788-5.788q2.386-2.386 4.772 0");
}
</style><path class="qvy53sl2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:diamond"} {...others} />);
}

export default Component;
