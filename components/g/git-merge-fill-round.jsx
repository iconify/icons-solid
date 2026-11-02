import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcbljub4e {
  fill: currentColor;
  d: path("M6.104 8.79A3.01 3.01 0 0 0 9 11h7.171a3 3 0 1 1 0 2H9a5 5 0 0 1-3-.999v3.17a3 3 0 1 1-2 0V8.829a3 3 0 1 1 2.104-.039");
}
</style><path class="gcbljub4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-merge-fill-round"} {...others} />);
}

export default Component;
