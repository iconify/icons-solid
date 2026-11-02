import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tk3y85fyx {
  fill: currentColor;
  d: path("M7.099 7a5.003 5.003 0 0 1 9.802 0H19c.489 0 .906.353.986.836l2 12A.998.998 0 0 1 21 21H3a.998.998 0 0 1-.986-1.164l2-12A1 1 0 0 1 5 7ZM9.17 7h5.66a3.002 3.002 0 0 0-5.66 0");
}
</style><path class="tk3y85fyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:handbag-fill-sharp"} {...others} />);
}

export default Component;
