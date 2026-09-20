import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqmfklxnd {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13h5l-5-5zm-5 9h6v-2l2 1.05v-4.1L14 14v-2H8z");
}
</style><path class="jqmfklxnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-file-sharp"} {...others} />);
}

export default Component;
