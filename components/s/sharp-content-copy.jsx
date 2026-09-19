import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rj6xlccuw {
  fill: currentColor;
  d: path("M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z");
}
</style><path class="rj6xlccuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-content-copy"} {...others} />);
}

export default Component;
