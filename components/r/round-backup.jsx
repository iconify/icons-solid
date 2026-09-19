import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tw_82oqzj {
  fill: currentColor;
  d: path("M19 11c0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-6.74 5.15A5.49 5.49 0 0 0 1 14.5C1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52c0-2.33-1.75-4.22-4-4.48m-6 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.35-.85l2.79-2.79c.2-.2.51-.2.71 0l2.79 2.79a.5.5 0 0 1-.35.85z");
}
</style><path class="tw_82oqzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-backup"} {...others} />);
}

export default Component;
