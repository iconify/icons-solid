import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idnpn86mi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM14.5858 8.0001L10 12.5859L10 8L8 8L8 15C8 15.5523 8.4477 16 9 16L16 16L16 14L11.4141 14L15.9998 9.4141L14.5858 8.0001Z");
}
</style><path clip-rule="evenodd" class="idnpn86mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-down-left-sharp-fill"} {...others} />);
}

export default Component;
