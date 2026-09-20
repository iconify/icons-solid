import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s39qlqbvb {
  fill: currentColor;
  d: path("M5 16.2V7.8l6 4.2zm8-.2V8h2v8zm4 0V8h2v8z");
}
</style><path class="s39qlqbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-pause"} {...others} />);
}

export default Component;
