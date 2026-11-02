import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t9q6e3ozi {
  fill: currentColor;
  d: path("M12 5c1.317 0 2.748.335 3.707 1.293l2 2a5.243 5.243 0 0 1 0 7.414l-2 2C14.748 18.665 13.317 19 12 19H8a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5Z");
}
</style><path class="t9q6e3ozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:label-fill-round"} {...others} />);
}

export default Component;
