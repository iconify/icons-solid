import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ylcm2yiyz {
  fill: var(--svg-color--faec78, #faec78);
  d: path("M53.09 26.904L38.48 24.22l-6.897-12.27l-6.898 12.27l-14.08 2.84l9.814 11.891l-2.572 15.85l13.732-6.751l14.11 6.903l-2.955-16z");
}

.zrzck2qgo {
  fill: var(--svg-color--edc26e, #edc26e);
  d: path("m61.13 23.718l-22.65-.105L31.583.692l-6.898 22.921l-22.651.105L20.423 38.35l-9.297 24.96l20.457-15.86L52.05 63.31l-9.308-24.96z");
}
</style><path class="zrzck2qgo"/><path class="ylcm2yiyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:star"} {...others} />);
}

export default Component;
