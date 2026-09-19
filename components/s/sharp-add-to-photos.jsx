import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ssrj8561x {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4z");
}
</style><path class="ssrj8561x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-to-photos"} {...others} />);
}

export default Component;
