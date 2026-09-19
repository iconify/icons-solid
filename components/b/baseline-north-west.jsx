import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v3tgw0b9a {
  fill: currentColor;
  d: path("M5 15h2V8.41L18.59 20L20 18.59L8.41 7H15V5H5z");
}
</style><path class="v3tgw0b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-north-west"} {...others} />);
}

export default Component;
