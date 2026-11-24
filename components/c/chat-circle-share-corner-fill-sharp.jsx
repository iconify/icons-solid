import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8hs8fb4j {
  fill: currentColor;
  d: path("M20 9H9v11a1 1 0 0 1-.804.981l-5 1a1 1 0 0 1-1.177-1.177l.935-4.673a9.943 9.943 0 0 1 17.94-8.578A1 1 0 0 1 20 9m1 9a1 1 0 0 1-2 0v-1.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414L17.586 15H16a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1Z");
}
</style><path class="f8hs8fb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-share-corner-fill-sharp"} {...others} />);
}

export default Component;
