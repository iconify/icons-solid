import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbws55bcr {
  fill: currentColor;
  d: path("M22 2H2v16h16l4 4zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4z");
}
</style><path class="jbws55bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-comment"} {...others} />);
}

export default Component;
