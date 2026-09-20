import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ujwosqbqg {
  fill: currentColor;
  d: path("M11 13v-2h2v2zm-2 2v-2h2v2zm4 0v-2h2v2zm2-2v-2h2v2zm-8 0v-2h2v2zm-4 8V3h18v18zm4-2h2v-2H7zm4 0h2v-2h-2zm8 0v-2zM5 17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2V5H5v8h2v2H5zm0 2V5zm14-6v2zm-4 4v2h2v-2z");
}
</style><path class="ujwosqbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gradient-outline-sharp"} {...others} />);
}

export default Component;
