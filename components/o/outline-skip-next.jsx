import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1x6nphmt {
  fill: currentColor;
  d: path("m6 18l8.5-6L6 6zm2-8.14L11.03 12L8 14.14zM16 6h2v12h-2z");
}
</style><path class="c1x6nphmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-skip-next"} {...others} />);
}

export default Component;
