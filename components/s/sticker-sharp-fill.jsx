import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ry7lgfbcx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 5.9249 18.0751 1 12 1C5.9249 1 1 5.9249 1 12C1 18.0751 5.9249 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071L22.7071 12.7071C22.8946 12.5196 23 12.2652 23 12ZM19.8284 12.7574L12.7574 19.8284C12.8516 15.9629 15.9629 12.8516 19.8284 12.7574Z");
}
</style><path clip-rule="evenodd" class="ry7lgfbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticker-sharp-fill"} {...others} />);
}

export default Component;
