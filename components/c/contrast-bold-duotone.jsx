import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.frd3jyjas {
  fill: currentColor;
  d: path("M12 2C14.5593 2 17.1185 2.976 19.0711 4.929C22.9764 8.834 22.9764 15.166 19.0711 19.071C17.1185 21.024 14.5593 22 12 22V2Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.yfrfykbvq {
  fill: currentColor;
  d: path("M4.92897 19.071C1.02367 15.166 1.02367 8.834 4.92897 4.929C6.88157 2.976 9.44077 2 12 2V12V22C9.44077 22 6.88157 21.024 4.92897 19.071Z");
}
</style><path class="frd3jyjas"/><path class="yfrfykbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:contrast-bold-duotone"} {...others} />);
}

export default Component;
