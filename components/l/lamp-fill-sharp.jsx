import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp43icbqg {
  fill: currentColor;
  d: path("M15 2c.379 0 .725.214.894.553l4 8A1 1 0 0 1 19 12h-6v4h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3v-4H5a1 1 0 0 1-.894-1.447l4-8A1 1 0 0 1 9 2Z");
}
</style><path class="bp43icbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lamp-fill-sharp"} {...others} />);
}

export default Component;
