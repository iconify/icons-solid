import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixszwuyym {
  fill: currentColor;
  d: path("m5.894 10.308l-3.202-3.05l.65-.747L6.116 9.15l-.127-1.716L9.423 4h5.154l3.435 3.435l-.128 1.715l2.774-2.639l.65.747l-3.202 3.05zM6.873 19l-.592-7.796h11.438L17.127 19z");
}
</style><path class="ixszwuyym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:takeout-dining"} {...others} />);
}

export default Component;
