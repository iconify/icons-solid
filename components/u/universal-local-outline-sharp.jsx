import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njc8eccww {
  fill: currentColor;
  d: path("M4 18h16V6H4zm-2 2V4h20v16zm2-2V6zm7.288-6.288Q11 11.425 11 11t.288-.712T12 10t.713.288T13 11t-.288.713T12 12t-.712-.288M12 17q2.025-1.725 3.013-3.187T16 11.1q0-1.875-1.213-2.987T12 7T9.213 8.113T8 11.1q0 1.25.988 2.713T12 17");
}
</style><path class="njc8eccww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:universal-local-outline-sharp"} {...others} />);
}

export default Component;
