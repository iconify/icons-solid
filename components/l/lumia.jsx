import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y7i0c4bhh {
  d: path("M8.647 11.686H3l5.941-2.76L11.691 3l.006 5.63a3.054 3.054 0 0 1-3.052 3.058zm6.706 0H21l-5.941-2.76L12.309 3l-.006 5.63a3.054 3.054 0 0 0 3.052 3.058zm0 .628H21l-5.941 2.76L12.309 21l-.006-5.63a3.054 3.054 0 0 1 3.052-3.058zm-6.706 0H3l5.941 2.76L11.691 21l.006-5.63a3.054 3.054 0 0 0-3.052-3.058z");
}
</style><path class="y7i0c4bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:lumia"} {...others} />);
}

export default Component;
