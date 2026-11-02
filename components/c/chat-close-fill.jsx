import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yuts_lb7v {
  fill: currentColor;
  d: path("M8 18c-.468 0-.98.395-1.293.707l-2 2a1.36 1.36 0 0 1-1.186.382C2.572 20.928 2 19.898 2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3Zm4-9.414l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 11.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 10l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="yuts_lb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-close-fill"} {...others} />);
}

export default Component;
