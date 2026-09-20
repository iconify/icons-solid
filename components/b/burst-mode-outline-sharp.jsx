import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z34uhccas {
  fill: currentColor;
  d: path("M1 19V5h2v14zm4 0V5h2v14zm4 0V5h14v14zm2-2h10V7H11zm1-2h8l-2.6-3.5l-1.9 2.5l-1.4-1.85zm-1 2V7z");
}
</style><path class="z34uhccas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:burst-mode-outline-sharp"} {...others} />);
}

export default Component;
