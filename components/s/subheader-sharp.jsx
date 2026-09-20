import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6iva4bso {
  fill: currentColor;
  d: path("M6.616 9.192h8v-2h-8zM4 20V4h16v16z");
}
</style><path class="i6iva4bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subheader-sharp"} {...others} />);
}

export default Component;
