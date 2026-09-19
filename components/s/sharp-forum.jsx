import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjakrkdqh {
  fill: currentColor;
  d: path("M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z");
}
</style><path class="kjakrkdqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-forum"} {...others} />);
}

export default Component;
