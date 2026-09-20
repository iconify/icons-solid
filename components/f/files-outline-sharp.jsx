import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3wcrjryr {
  fill: currentColor;
  d: path("M2 20V6h8l2-2h10v16zm3.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v9zm7-4");
}
</style><path class="f3wcrjryr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:files-outline-sharp"} {...others} />);
}

export default Component;
