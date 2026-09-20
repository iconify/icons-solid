import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n7lmgrhuc {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="n7lmgrhuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-none-sharp"} {...others} />);
}

export default Component;
