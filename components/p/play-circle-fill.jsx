import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oyb3jdb6l {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40.55 110.58l-52 36A8 8 0 0 1 104 164V92a8 8 0 0 1 12.55-6.58l52 36a8 8 0 0 1 0 13.16");
}
</style><path class="oyb3jdb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:play-circle-fill"} {...others} />);
}

export default Component;
