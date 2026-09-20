import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0wr-cbne {
  fill: currentColor;
  d: path("M8 16h12V6H8zm-2 2V2h16v16zm-4 4V6h2v14h14v2zm6-6V4z");
}
</style><path class="m0wr-cbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ad-group-outline-sharp"} {...others} />);
}

export default Component;
