import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ob15n2bin {
  fill: currentColor;
  d: path("M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48L10.57 11zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41l5.09 5.09L23 13z");
}
</style><path class="ob15n2bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-spellcheck"} {...others} />);
}

export default Component;
