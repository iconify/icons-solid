import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vim2x8bze {
  fill: currentColor;
  d: path("M20.45 5.37A1 1 0 0 0 19.52 4H7V3c0-.55-.45-1-1-1s-1 .45-1 1v19h2v-8h12.52c.71 0 1.19-.71.93-1.37L19 9zM15 9c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2");
}
</style><path class="vim2x8bze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-tour"} {...others} />);
}

export default Component;
