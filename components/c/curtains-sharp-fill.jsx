import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6czx-hhm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 4H21V21C21 21.552 20.552 22 20 22H13V4H11V22H4C3.448 22 3 21.552 3 21V4H2V2H22V4ZM7 4V10H9V4H7ZM15 4V10H17V4H15Z");
}
</style><path clip-rule="evenodd" class="b6czx-hhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:curtains-sharp-fill"} {...others} />);
}

export default Component;
