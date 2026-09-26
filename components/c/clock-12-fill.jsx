import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzg4uzwts {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.9249 23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1ZM11 6C11 5.4477 11.4477 5 12 5C12.5523 5 13 5.4477 13 6L13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z");
}
</style><path clip-rule="evenodd" class="tzg4uzwts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-12-fill"} {...others} />);
}

export default Component;
