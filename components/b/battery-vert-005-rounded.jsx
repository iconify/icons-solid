import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-9-o46-e {
  fill: currentColor;
  d: path("M8 22q-.425 0-.713-.288T7 21V5q0-.425.288-.713T8 4h2V3q0-.425.288-.713T11 2h2q.425 0 .713.288T14 3v1h2q.425 0 .713.288T17 5v16q0 .425-.288.713T16 22H8Zm1-3h6V6H9v13Z");
}
</style><path class="y-9-o46-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-vert-005-rounded"} {...others} />);
}

export default Component;
