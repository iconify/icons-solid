import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x6r1jbnmo {
  fill: currentColor;
  d: path("M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z");
}
</style><path class="x6r1jbnmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-splitscreen"} {...others} />);
}

export default Component;
