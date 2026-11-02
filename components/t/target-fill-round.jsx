import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eel_tfbwn {
  fill: currentColor;
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M6 12a6 6 0 1 0 12 0a6 6 0 0 0-12 0m9.686-1.557a4.001 4.001 0 0 1-7.371 3.113a4 4 0 0 1 7.371-3.113M12.01 11H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="eel_tfbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:target-fill-round"} {...others} />);
}

export default Component;
