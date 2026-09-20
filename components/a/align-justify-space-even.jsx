import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_-ycebyf {
  fill: currentColor;
  d: path("M20 22V2h2v20zM2 22V2h2v20zm12-5V7h3v10zm-7 0V7h3v10z");
}
</style><path class="y_-ycebyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-justify-space-even"} {...others} />);
}

export default Component;
