import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfxkwmt0a {
  fill: currentColor;
  d: path("M8 12h8v-2H8zm1 3.5h6v-2H9zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="nfxkwmt0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:aod-sharp"} {...others} />);
}

export default Component;
