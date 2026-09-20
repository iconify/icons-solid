import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opcenrk-b {
  fill: currentColor;
  d: path("m12.225 12.5l2.275-1.375l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L14.5 5.5l-1.05 2.45l-2.625.225l2 1.725zm.6 6.5h5.425l.175 1.325l-14.725 1.8L1.85 7.2L5 6.85v2l-.9.125L5.45 19.9zM7 17V2h15v15zm2-2h11V4H9zm5.5-5.5");
}
</style><path class="opcenrk-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cards-star-outline-sharp"} {...others} />);
}

export default Component;
