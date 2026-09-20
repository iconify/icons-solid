import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k65qu_b7u {
  fill: currentColor;
  d: path("M2 22V6.65L15.9 1l.65 1.65L8.3 6H22v16zm2-2h16v-7H4zm5.775-1.725q.725-.725.725-1.775t-.725-1.775T8 14t-1.775.725T5.5 16.5t.725 1.775T8 19t1.775-.725M4 11h12V9h2v2h2V8H4zm0 9v-7z");
}
</style><path class="k65qu_b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:radio-outline-sharp"} {...others} />);
}

export default Component;
