import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.em3gdy5id {
  fill: currentColor;
  d: path("M12.713 19.713Q13 19.425 13 19t-.288-.712T12 18t-.712.288T11 19t.288.713T12 20t.713-.288M5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="em3gdy5id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-2-outline-sharp"} {...others} />);
}

export default Component;
