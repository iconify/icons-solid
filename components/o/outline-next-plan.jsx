import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mdjttzbst {
  fill: currentColor;
  d: path("M15.97 11.03C14.87 9.79 13.28 9 11.5 9c-2.82 0-5.18 1.95-5.82 4.56l.96.32C7.15 11.66 9.13 10 11.5 10c1.51 0 2.85.68 3.76 1.74L13 14h5V9z");
}

.vy-mwmbvm {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8");
}
</style><path class="vy-mwmbvm"/><path class="mdjttzbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-next-plan"} {...others} />);
}

export default Component;
