import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgvuc9pkq {
  fill: currentColor;
  d: path("m6.382 4.968l-.711-.712a10.001 10.001 0 0 1 14.073 14.073Zm-2.126.703l14.073 14.073A10.001 10.001 0 0 1 4.256 5.671");
}
</style><path class="fgvuc9pkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-slash-fill"} {...others} />);
}

export default Component;
