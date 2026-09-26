import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anrqqjrjv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM9 7L9 11.6667L7 11.6667L7 7L9 7ZM13 7L13 14.3333L11 14.3333L11 7L13 7ZM17 7L17 17L15 17L15 7L17 7Z");
}
</style><path clip-rule="evenodd" class="anrqqjrjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-bar-chart-2-down-sharp-fill"} {...others} />);
}

export default Component;
