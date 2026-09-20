import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.semdv364p {
  fill: currentColor;
  d: path("M4 16V8h2v6h3v2zm7 0v-6H9V8h6v2h-2v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2z");
}
</style><path class="semdv364p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lte-mobiledata"} {...others} />);
}

export default Component;
