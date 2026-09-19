import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irhxq-bln {
  fill: currentColor;
  d: path("M2.99 3L3 21h12l6-6V3zM7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z");
}
</style><path class="irhxq-bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sticky-note-2"} {...others} />);
}

export default Component;
