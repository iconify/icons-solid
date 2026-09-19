import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.q5amowf4h {
  fill: currentColor;
  d: path("M53.213 10.786c-11.715-11.715-30.71-11.715-42.425 0c-11.717 11.717-11.717 30.711 0 42.426c11.715 11.717 30.71 11.717 42.425 0c11.715-11.715 11.715-30.709 0-42.426M45 44.999H22.874l7.345-7.563L17 24.044l6.956-7.045l13.458 13.283L45 22.866z");
}
</style><path class="q5amowf4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:down-right-arrow"} {...others} />);
}

export default Component;
