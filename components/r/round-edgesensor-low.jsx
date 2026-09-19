import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l01t1qbvp {
  fill: currentColor;
  d: path("M3 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m18 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m-5-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z");
}
</style><path class="l01t1qbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-edgesensor-low"} {...others} />);
}

export default Component;
