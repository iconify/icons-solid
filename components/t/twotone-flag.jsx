import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fahtusbff {
  fill: currentColor;
  d: path("M12.36 6H7v6h7.24l.4 2H18V8h-5.24z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.isrkkfbce {
  fill: currentColor;
  d: path("M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18z");
}
</style><path class="fahtusbff"/><path class="isrkkfbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-flag"} {...others} />);
}

export default Component;
