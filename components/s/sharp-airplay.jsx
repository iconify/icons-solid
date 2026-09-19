import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.codrdcbyt {
  fill: currentColor;
  d: path("M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z");
}
</style><path class="codrdcbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-airplay"} {...others} />);
}

export default Component;
