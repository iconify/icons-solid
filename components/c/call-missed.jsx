import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsz3opb4z {
  fill: currentColor;
  d: path("M19.59 7L12 14.59L6.41 9H11V7H3v8h2v-4.59l7 7l9-9z");
}
</style><path class="bsz3opb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:call-missed"} {...others} />);
}

export default Component;
