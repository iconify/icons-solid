import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tq_qo0bvw {
  fill: currentColor;
  d: path("M180 148h-24v-40h24a32 32 0 1 0-32-32v24h-40V76a32 32 0 1 0-32 32h24v40H76a32 32 0 1 0 32 32v-24h40v24a32 32 0 1 0 32-32m-24-72a24 24 0 1 1 24 24h-24ZM52 76a24 24 0 0 1 48 0v24H76a24 24 0 0 1-24-24m48 104a24 24 0 1 1-24-24h24Zm8-72h40v40h-40Zm72 96a24 24 0 0 1-24-24v-24h24a24 24 0 0 1 0 48");
}
</style><path class="tq_qo0bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:command-thin"} {...others} />);
}

export default Component;
