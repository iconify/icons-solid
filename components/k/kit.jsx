import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d785swbja {
  fill: var(--svg-color--6025e1, #6025e1);
  fill-rule: evenodd;
  d: path("M5.118 5.43v13.029L9.458 21l9.425-4.553V7.48L9.898 3zm.164.064l4.071 2.821V20.81l.847-4.378l4.447-1.985v-4.87l-9.365-4.09z");
}
</style><path clip-rule="evenodd" class="d785swbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:kit"} {...others} />);
}

export default Component;
