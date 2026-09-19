import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1wjqqbnz {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 6h2v12H4zm16 12h-2V6h2z");
}
</style><path class="m1wjqqbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-width-wide"} {...others} />);
}

export default Component;
