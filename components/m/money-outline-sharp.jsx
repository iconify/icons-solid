import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t579iybth {
  fill: currentColor;
  d: path("M14 16h5V8h-5zm2-2v-4h1v4zm-8 2h5V8H8zm2-2v-4h1v4zm-5 2h2V8H5zm-3 4V4h20v16zM4 6v12zm0 12h16V6H4z");
}
</style><path class="t579iybth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:money-outline-sharp"} {...others} />);
}

export default Component;
