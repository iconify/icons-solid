import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wu97xdbpi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM7 9L17 9L17 7L7 7L7 9ZM7 13L14.3333 13L14.3333 11L7 11L7 13ZM7 17L11.6667 17L11.6667 15L7 15L7 17Z");
}
</style><path clip-rule="evenodd" class="wu97xdbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-bar-chart-2-horizontal-start-sharp-fill"} {...others} />);
}

export default Component;
