import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4gzpwb0w {
  fill: currentColor;
  d: path("M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22zM18 22v-6h3l-2.54-7.63A2.01 2.01 0 0 0 16.56 7h-.12a2 2 0 0 0-1.9 1.37L12 16h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2");
}
</style><path class="c4gzpwb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-wc"} {...others} />);
}

export default Component;
