import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qziaiaccx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12.967 2.377A1.002 1.002 0 0 1 14.75 3v6H19a1 1 0 0 1 .783 1.623l-8.75 11A1.002 1.002 0 0 1 9.25 21v-6H5a1 1 0 0 1-.783-1.623Z");
}
</style><path class="qziaiaccx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-bulk-sharp"} {...others} />);
}

export default Component;
