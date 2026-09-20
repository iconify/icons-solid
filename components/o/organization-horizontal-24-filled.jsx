import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.es7bteg7z {
  fill: currentColor;
  d: path("M5.748 16.002A3.752 3.752 0 1 1 9.426 11.5h2.072V8.25A2.25 2.25 0 0 1 13.748 6h.825a3.753 3.753 0 1 1 0 1.5h-.825a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h.825a3.753 3.753 0 1 1 0 1.5h-.825a2.25 2.25 0 0 1-2.25-2.25V13H9.426a3.754 3.754 0 0 1-3.678 3.002");
}
</style><path class="es7bteg7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:organization-horizontal-24-filled"} {...others} />);
}

export default Component;
