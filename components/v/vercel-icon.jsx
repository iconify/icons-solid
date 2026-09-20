import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":222};
const content = `<style>.gzzr1mstp {
  d: path("m128 0l128 221.705H0z");
}
</style><path class="gzzr1mstp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:vercel-icon"} {...others} />);
}

export default Component;
