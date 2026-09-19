import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.hb3leus3r {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M64 43H0c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11");
}

.mjivo9sdk {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M0 21h64c0-6.075-3.373-11-10-11H10C3.373 10 0 14.925 0 21");
}

.upmf6ob0d {
  fill: var(--svg-color--2b3990, #2b3990);
  d: path("M0 21h64v11H0z");
}

.zroc16cla {
  fill: var(--svg-color--f9cb38, #f9cb38);
  d: path("M0 32h64v11H0z");
}
</style><path class="mjivo9sdk"/><path class="upmf6ob0d"/><path class="zroc16cla"/><path class="hb3leus3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:flag-for-flag-mauritius"} {...others} />);
}

export default Component;
