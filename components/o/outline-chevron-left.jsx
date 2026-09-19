import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tkn5vwbtp {
  fill: currentColor;
  d: path("M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z");
}
</style><path class="tkn5vwbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-chevron-left"} {...others} />);
}

export default Component;
