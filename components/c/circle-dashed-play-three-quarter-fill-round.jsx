import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lknr2vb3r {
  fill: currentColor;
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-9.877-11.564a1 1 0 1 1 1.975.313a8 8 0 1 0 6.651-6.651a1 1 0 1 1-.313-1.975A10 10 0 0 1 12 2M6.122 3.91a1 1 0 1 1 1.176 1.618a8 8 0 0 0-1.77 1.77A1 1 0 1 1 3.91 6.122A10 10 0 0 1 6.122 3.91M9 10c0-.428.121-.845.355-1.204c.699-1.07 2.146-1.33 3.2-.628l3 2a2.202 2.202 0 0 1 0 3.664l-3 2c-1.054.702-2.501.442-3.2-.628A2.2 2.2 0 0 1 9 14Z");
}
</style><path class="lknr2vb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-dashed-play-three-quarter-fill-round"} {...others} />);
}

export default Component;
