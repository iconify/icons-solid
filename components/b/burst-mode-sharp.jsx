import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9__dtx8q {
  fill: currentColor;
  d: path("M1 19V5h2v14zm4 0V5h2v14zm4 0V5h14v14zm3-4h8l-2.6-3.5l-1.9 2.5l-1.4-1.85z");
}
</style><path class="y9__dtx8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:burst-mode-sharp"} {...others} />);
}

export default Component;
