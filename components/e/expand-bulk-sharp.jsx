import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o4nd5ibfn {
  fill: currentColor;
  d: path("M20 3a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V5h-5a1 1 0 0 1 0-2ZM4 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Z");
}
</style><path class="o4nd5ibfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:expand-bulk-sharp"} {...others} />);
}

export default Component;
