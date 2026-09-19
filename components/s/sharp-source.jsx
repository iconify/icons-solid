import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z6fwdrb3p {
  fill: currentColor;
  d: path("m12 6l-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z");
}
</style><path class="z6fwdrb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-source"} {...others} />);
}

export default Component;
