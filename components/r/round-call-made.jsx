import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ll1e7hk8v {
  fill: currentColor;
  d: path("M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1");
}
</style><path class="ll1e7hk8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-call-made"} {...others} />);
}

export default Component;
