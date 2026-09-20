import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahr_45b_g {
  fill: currentColor;
  d: path("M9.192 21q-.252 0-.485-.026t-.476-.078q2.496-1.294 3.93-3.688T13.597 12t-1.434-5.208T8.23 3.104q.244-.052.477-.078T9.192 3q1.868 0 3.51.708t2.858 1.923t1.923 2.857q.71 1.642.71 3.509t-.71 3.51t-1.923 2.859t-2.858 1.925t-3.51.709");
}
</style><path class="ahr_45b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:brightness-3-sharp"} {...others} />);
}

export default Component;
