import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjfbkjutw {
  fill: currentColor;
  d: path("M18.292 19L7 7.708V15H6V6h9v1H7.708L19 18.292z");
}
</style><path class="zjfbkjutw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:north-west-sharp"} {...others} />);
}

export default Component;
