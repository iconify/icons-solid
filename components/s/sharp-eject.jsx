import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5804ubjm {
  fill: currentColor;
  d: path("M5 17h14v2H5zm7-12L5.33 15h13.34z");
}
</style><path class="w5804ubjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-eject"} {...others} />);
}

export default Component;
