import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ewx7mwb8e {
  fill: currentColor;
  d: path("M152 152h-48V40a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm72 16H32a16 16 0 0 0-16 16v8a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-8a16 16 0 0 0-16-16m0-20v-12a96.44 96.44 0 0 0-50.11-84.31a4 4 0 0 0-5.89 3.53V152h52a4 4 0 0 0 4-4m-188 4h52V55.22a4 4 0 0 0-5.89-3.53A96.44 96.44 0 0 0 32 136v12a4 4 0 0 0 4 4");
}
</style><path class="ewx7mwb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hard-hat-fill"} {...others} />);
}

export default Component;
