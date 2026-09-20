import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdvak-brn {
  fill: currentColor;
  d: path("M4 17V7h7v2H6v2h4v2H6v4zm9 0V7h6l1 1v4l-1 1h-.85L20 17h-2.1l-1.875-4H15v4zm2-6h3V9h-3z");
}
</style><path class="vdvak-brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-french-outline-sharp"} {...others} />);
}

export default Component;
