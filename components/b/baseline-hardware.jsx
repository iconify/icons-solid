import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmrflekvk {
  fill: currentColor;
  d: path("m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3zM9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7z");
}
</style><path class="nmrflekvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-hardware"} {...others} />);
}

export default Component;
