import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nsdc4kb_p {
  fill: currentColor;
  d: path("M4 20v-2.52L17.914 3.555l2.526 2.544L6.52 20zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496zM9.896 20l1-1H21v1z");
}
</style><path class="nsdc4kb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:edit-line-sharp"} {...others} />);
}

export default Component;
