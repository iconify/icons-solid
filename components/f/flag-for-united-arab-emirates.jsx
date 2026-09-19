import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.hwk5csx9o {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9 40v16.564a28 28 0 0 1-2-.746V6.182c.653-.275 1.322-.52 2-.746V22h35.213C59.365 25.062 60 28.541 60 32s-.635 6.938-1.787 10z");
}
</style><path class="hwk5csx9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-united-arab-emirates"} {...others} />);
}

export default Component;
