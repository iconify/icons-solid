import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ssvpicc2m {
  fill: currentColor;
  d: path("M2 20v-8h4V4h12v8h4v8zm6-8h8V6H8zm10 5q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17");
}
</style><path class="ssvpicc2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:adf-scanner-sharp"} {...others} />);
}

export default Component;
