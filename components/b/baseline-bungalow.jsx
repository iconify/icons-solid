import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9kk8xt_a {
  fill: currentColor;
  d: path("M12 3L4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77l1.7-1.06zm1 11h-2v-2h2z");
}
</style><path class="l9kk8xt_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-bungalow"} {...others} />);
}

export default Component;
