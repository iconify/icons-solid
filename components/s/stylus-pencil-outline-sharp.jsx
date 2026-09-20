import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckm01-b7q {
  fill: currentColor;
  d: path("m6 16l5-13h2l5 13zm2.9-2h6.2L12 5.975zm0 0h6.2zM4 21l1-3h14l1 3z");
}
</style><path class="ckm01-b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-pencil-outline-sharp"} {...others} />);
}

export default Component;
