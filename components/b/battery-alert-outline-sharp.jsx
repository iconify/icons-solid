import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hxph94rdm {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zm2-2h6V6H9zm0 0h6zm2-6h2V8h-2zm1 4q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18");
}
</style><path class="hxph94rdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-alert-outline-sharp"} {...others} />);
}

export default Component;
