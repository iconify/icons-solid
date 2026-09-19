import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6as2zbqa {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-7 14h-2V9h-2V7h4z");
}
</style><path class="a6as2zbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-one"} {...others} />);
}

export default Component;
