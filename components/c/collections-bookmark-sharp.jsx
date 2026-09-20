import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ln5_fkbyx {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zM13 4v7l2.5-1.5L18 11V4z");
}
</style><path class="ln5_fkbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:collections-bookmark-sharp"} {...others} />);
}

export default Component;
