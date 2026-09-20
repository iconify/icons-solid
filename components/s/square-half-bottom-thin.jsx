import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n_1qvqbbo {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m52 80v72H84v-72Zm8 0h24v72h-24Zm32 0h24v72h-24Zm-96 68v-68h24v72H56a4 4 0 0 1-4-4m148 4h-20v-72h24v68a4 4 0 0 1-4 4");
}
</style><path class="n_1qvqbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-half-bottom-thin"} {...others} />);
}

export default Component;
