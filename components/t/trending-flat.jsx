import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhl8kcbfh {
  fill: currentColor;
  d: path("m22 12l-4-4v3H3v2h15v3z");
}
</style><path class="fhl8kcbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:trending-flat"} {...others} />);
}

export default Component;
