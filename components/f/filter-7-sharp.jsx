import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-31-mbsn {
  fill: currentColor;
  d: path("M11 15h2l4-8V5h-6v2h4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="i-31-mbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-7-sharp"} {...others} />);
}

export default Component;
