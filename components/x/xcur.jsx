import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.va52lqbjn {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9m6.063-6.03c.289-.588-.107-1.246-.746-1.39c-.579-.129-1.147.217-1.452.726a4.5 4.5 0 1 1-.182-4.892c.363.514 1.016.82 1.6.585c.568-.228.855-.876.546-1.404A6.75 6.75 0 0 0 12 5.25a6.75 6.75 0 1 0 6.064 9.72");
}
</style><path clip-rule="evenodd" class="va52lqbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xcur"} {...others} />);
}

export default Component;
