import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.l1-9on3sv {
  fill: currentColor;
  d: path("M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.426c11.715 11.717 30.711 11.717 42.426 0c11.716-11.715 11.716-30.709 0-42.426M41.056 44.999H19V22.866l7.51 7.416l13.451-13.283L47 24.044L33.626 37.437z");
}
</style><path class="l1-9on3sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:down-left-arrow"} {...others} />);
}

export default Component;
