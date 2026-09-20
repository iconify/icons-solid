import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ie_045bec {
  fill: currentColor;
  d: path("M2 6.25A2.25 2.25 0 0 1 6.486 6h11.028A2.25 2.25 0 0 1 22 6.25v10.5a2.25 2.25 0 0 1-4.486.25H6.486A2.25 2.25 0 0 1 2 16.75zm3 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm1.5 9.25h11v-8h-11zm14-9.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ie_045bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pipeline-24-regular"} {...others} />);
}

export default Component;
