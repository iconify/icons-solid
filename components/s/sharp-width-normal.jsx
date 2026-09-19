import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srxdbmbht {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z");
}
</style><path class="srxdbmbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-width-normal"} {...others} />);
}

export default Component;
