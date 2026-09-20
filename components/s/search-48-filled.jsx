import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tkwmdzb1z {
  fill: currentColor;
  d: path("M31.204 33.325A15.94 15.94 0 0 1 21 37c-8.837 0-16-7.163-16-16S12.163 5 21 5s16 7.163 16 16c0 3.878-1.38 7.434-3.675 10.203l9.236 9.236a1.5 1.5 0 0 1-2.122 2.122zM34 21c0-7.18-5.82-13-13-13S8 13.82 8 21s5.82 13 13 13s13-5.82 13-13");
}
</style><path class="tkwmdzb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:search-48-filled"} {...others} />);
}

export default Component;
