import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfnibbloc {
  fill: currentColor;
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414l-3.494-3.493c-1.502 1.609-3.39 2.809-5.393 3.7a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3.414l-.707-.707a.999.999 0 1 1 1.414-1.414m14.791 11.963L7.243 2H20a1 1 0 0 1 1 1v7c0 1.645-.302 3.291-.953 4.805Z");
}
</style><path class="tfnibbloc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-off-fill-sharp"} {...others} />);
}

export default Component;
