import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ks3qzdbnx {
  fill: currentColor;
  d: path("m6 16l5-13h2l5 13zm-2 5l1-3h14l1 3z");
}
</style><path class="ks3qzdbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-pencil-sharp"} {...others} />);
}

export default Component;
