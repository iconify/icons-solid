import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j3a4yebvh {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z");
}
</style><path class="j3a4yebvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-library-books"} {...others} />);
}

export default Component;
