import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tvx1lebqh {
  fill: currentColor;
  d: path("M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z");
}
</style><path class="tvx1lebqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-equalizer"} {...others} />);
}

export default Component;
