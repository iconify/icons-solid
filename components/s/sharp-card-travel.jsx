import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kho8-cb4f {
  fill: currentColor;
  d: path("M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20zM9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z");
}
</style><path class="kho8-cb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-card-travel"} {...others} />);
}

export default Component;
