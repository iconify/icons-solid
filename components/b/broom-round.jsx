import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdjscxbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20H6c-.919 0-1.46-1.081-1-2l2-4c.613-1.226 1.387-2 2-2h6c.613 0 1.387.774 2 2l2 4c.46.919-.081 2-1 2zm-2 0v-3m4 3v-3M12 3v9");
}
</style><path class="fdjscxbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:broom-round"} {...others} />);
}

export default Component;
