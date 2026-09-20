import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lki_8vbci {
  fill: currentColor;
  d: path("M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z");
}
</style><path class="lki_8vbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:leaderboard-sharp"} {...others} />);
}

export default Component;
