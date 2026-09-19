import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wo9uq2bbe {
  fill: currentColor;
  d: path("M20 15.31L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6");
}
</style><path class="wo9uq2bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:brightness-6"} {...others} />);
}

export default Component;
