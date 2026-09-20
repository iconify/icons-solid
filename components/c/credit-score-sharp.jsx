import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1uvfccyg {
  fill: currentColor;
  d: path("m14.642 20.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 11.192h16V8.808H4zM3 19V5h18v6.192h-1.263l-5.095 5.095l-2.844-2.845l-3.538 3.539L9.273 18v1z");
}
</style><path class="s1uvfccyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:credit-score-sharp"} {...others} />);
}

export default Component;
