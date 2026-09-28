import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sk7f1eb8w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2L4 2L4 22L20 22L20 8L14 2ZM14 2L14 8L20 8M7.6508 10.7007L11.5 14L7.6508 17.2993M12 18L17 18");
}
</style><path class="sk7f1eb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-terminal-sharp"} {...others} />);
}

export default Component;
