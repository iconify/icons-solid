import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orql_mwti {
  fill: currentColor;
  d: path("M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z");
}
</style><path class="orql_mwti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-picture-in-picture-alt"} {...others} />);
}

export default Component;
