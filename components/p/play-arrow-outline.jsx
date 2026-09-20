import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgaoxullz {
  fill: currentColor;
  d: path("M9 17.192V6.808L17.154 12zm1-1.842L15.289 12L10 8.65z");
}
</style><path class="pgaoxullz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:play-arrow-outline"} {...others} />);
}

export default Component;
