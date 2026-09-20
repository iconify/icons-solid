import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b02uf93_l {
  fill: currentColor;
  d: path("M2 22V2h2v20zm11-5V7h3v10zm-6 0V7h3v10z");
}
</style><path class="b02uf93_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-justify-flex-start-outline-sharp"} {...others} />);
}

export default Component;
