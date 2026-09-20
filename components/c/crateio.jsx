import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":192};
const content = `<style>.r63qlvx5j {
  fill: var(--svg-color--009dc7, #009dc7);
  d: path("M192 64V0h-64v64H0v64h64v64h64v-64h128V64z");
}
</style><path class="r63qlvx5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:crateio"} {...others} />);
}

export default Component;
