import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0n4bqbxz {
  fill: currentColor;
  d: path("M15 19H1V5h14zm2 0V5h2v14zm4 0V5h2v14zM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85z");
}
</style><path class="b0n4bqbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:art-track-sharp"} {...others} />);
}

export default Component;
