import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzekrdboh {
  fill: currentColor;
  d: path("m1 18l6-8l4.5 6h2.525l-3.775-5L14 6l9 12z");
}
</style><path class="vzekrdboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:landscape-sharp"} {...others} />);
}

export default Component;
