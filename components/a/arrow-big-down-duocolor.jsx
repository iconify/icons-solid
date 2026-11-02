import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3mlhdr2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5c-.369 0-.369.631 0 1l6 6a1.414 1.414 0 0 0 2 0l6-6c.369-.369.369-1 0-1h-3a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1z");
}
</style><path class="u3mlhdr2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-down-duocolor"} {...others} />);
}

export default Component;
