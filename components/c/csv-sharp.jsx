import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czwutue9f {
  fill: currentColor;
  d: path("M5.327 14.692h3.385v-.884h-2.5v-3.616h2.5v-.884H5.327zm4.785 0h3.384v-3.111h-2.5v-1.389h2.5v-.884h-3.385v3.1h2.5v1.4h-2.5zm6.138 0h1.192L19 9.308h-.923l-1.23 4.258l-1.232-4.258h-.923zM3 19V5h18v14z");
}
</style><path class="czwutue9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:csv-sharp"} {...others} />);
}

export default Component;
