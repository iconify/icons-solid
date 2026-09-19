import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-vnskblu {
  fill: currentColor;
  d: path("m20.79 9.23l-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77l2 3.46L10 15.46V21h4v-5.54l4.79 2.77l2-3.46L16 12z");
}
</style><path class="c-vnskblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-emergency"} {...others} />);
}

export default Component;
