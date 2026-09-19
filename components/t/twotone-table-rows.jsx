import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eeou1wc5s {
  fill: currentColor;
  d: path("M19 5v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.y6oq3rbga {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z");
}
</style><path class="eeou1wc5s"/><path class="y6oq3rbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-table-rows"} {...others} />);
}

export default Component;
