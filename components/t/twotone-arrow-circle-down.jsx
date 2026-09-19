import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpwzstbih {
  fill: currentColor;
  d: path("M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z");
}

.upuou5o2k {
  fill: currentColor;
  d: path("M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 12l-4-4h3V8h2v4h3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="upuou5o2k"/><path class="bpwzstbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-circle-down"} {...others} />);
}

export default Component;
