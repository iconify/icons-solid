import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvjv9g5ss {
  fill: currentColor;
  d: path("M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z");
}
</style><path class="dvjv9g5ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-devices"} {...others} />);
}

export default Component;
