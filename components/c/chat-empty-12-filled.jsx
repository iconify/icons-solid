import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.gula3vbxz {
  fill: currentColor;
  d: path("M6 1a5 5 0 0 0-4.386 7.403l-.592 1.947a.5.5 0 0 0 .624.624l1.945-.592A5 5 0 1 0 6 1");
}
</style><path class="gula3vbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chat-empty-12-filled"} {...others} />);
}

export default Component;
