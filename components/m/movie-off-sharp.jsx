import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqug93typ {
  fill: currentColor;
  d: path("M3 19V5h1.808l14 14zm18-.221L7.639 5h1.419l1.425 2.844l.156.156h2.919l-1.5-3h2.5l1.5 3h3l-1.5-3H21zm-1.09 2.75L2.47 4.09l.714-.714l17.438 17.439z");
}
</style><path class="vqug93typ"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:movie-off-sharp"} {...others} />);
}

export default Component;
