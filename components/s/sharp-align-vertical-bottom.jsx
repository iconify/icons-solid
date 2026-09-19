import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajvn4_1qw {
  fill: currentColor;
  d: path("M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z");
}
</style><path class="ajvn4_1qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-align-vertical-bottom"} {...others} />);
}

export default Component;
