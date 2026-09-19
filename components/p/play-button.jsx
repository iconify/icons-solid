import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.djtokm0li {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M63.916 57.025a6.89 6.89 0 0 1-6.889 6.895H6.887A6.89 6.89 0 0 1 0 57.025V6.891A6.89 6.89 0 0 1 6.887 0h50.14a6.89 6.89 0 0 1 6.889 6.891z");
}

.v0d984b3h {
  fill: var(--svg-color--fff, #fff);
  d: path("M22.452 11.817c-2.849.194-5.226 1.439-6.269 3.143v34c1.046 1.708 3.432 2.955 6.285 3.144l27.564-20.07l-27.58-20.22");
}
</style><path class="djtokm0li"/><path class="v0d984b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:play-button"} {...others} />);
}

export default Component;
