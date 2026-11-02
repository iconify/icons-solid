import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hokulublc {
  fill: currentColor;
  d: path("m7.051 15.684l4-12a1 1 0 0 1 1.898 0l4 12a1.001 1.001 0 0 1-1.898.632L13.946 13h-3.892l-1.105 3.316a1.001 1.001 0 0 1-1.898-.632M12 7.162L10.721 11h2.558ZM20 19a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}
</style><path class="hokulublc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-color-fill-sharp"} {...others} />);
}

export default Component;
