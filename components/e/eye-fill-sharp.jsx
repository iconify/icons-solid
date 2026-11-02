import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nskupqbht {
  fill: currentColor;
  d: path("M3.721 8.892a10.75 10.75 0 0 1 18.202 2.723a1 1 0 0 1 0 .77a10.751 10.751 0 0 1-19.846 0a1 1 0 0 1 0-.77c.409-.984.963-1.903 1.644-2.723m5.515 1.94a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335");
}
</style><path class="nskupqbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eye-fill-sharp"} {...others} />);
}

export default Component;
