import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nqaqhdbvw {
  fill: currentColor;
  d: path("M2 22h20V2zm18-2H6.83L20 6.83z");
}
</style><path class="nqaqhdbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-signal-cellular-0-bar"} {...others} />);
}

export default Component;
