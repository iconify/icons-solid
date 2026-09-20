import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jk_x74hud {
  fill: currentColor;
  d: path("M6.923 15.308L11.346 4h1.289l4.423 11.308zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="jk_x74hud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stylus-pencil-sharp"} {...others} />);
}

export default Component;
