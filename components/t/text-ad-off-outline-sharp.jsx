import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3ukrz99w {
  fill: currentColor;
  d: path("M20 17.15V6H8.85l-2-2H22v15.15zm.45 6.15l-3.3-3.3H2V4h2l2 2H4v12h11.15L.65 3.5l1.425-1.425l19.8 19.8zM5 17v-2h10l2 2zm0-4v-2h6l2 2zm0-4V7h2l2 2zm10.85 4H19v-2h-5.15zm-4-4H15V7H9.85z");
}
</style><path class="z3ukrz99w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-ad-off-outline-sharp"} {...others} />);
}

export default Component;
