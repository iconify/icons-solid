import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aupquyb7n {
  fill: currentColor;
  d: path("M16.486 2.143a1 1 0 0 1 1.371.343a1 1 0 0 1-.343 1.371L10.61 8H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1.723ZM6 15a3 3 0 1 0 6 0a3 3 0 0 0-6 0m11-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-2 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z");
}
</style><path class="aupquyb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-receiver-fill"} {...others} />);
}

export default Component;
