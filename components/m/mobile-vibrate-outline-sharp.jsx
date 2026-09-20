import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.reumr90qd {
  fill: currentColor;
  d: path("M0 15V9h2v6zm3 2V7h2v10zm19-2V9h2v6zm-3 2V7h2v10zM6 21V3h12v18zm10-2V5H8v14zM12.713 7.713Q13 7.425 13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8t.713-.288M8 5v14z");
}
</style><path class="reumr90qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-vibrate-outline-sharp"} {...others} />);
}

export default Component;
