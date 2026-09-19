import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4bq_rsgd {
  fill: currentColor;
  d: path("M12 4C7.7 4 3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47A16.87 16.87 0 0 0 12 4m0 4c-2.86 0-5.5.94-7.65 2.51L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-1.43 1.43A13 13 0 0 0 12 8");
}
</style><path class="c4bq_rsgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-network-wifi"} {...others} />);
}

export default Component;
