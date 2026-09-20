import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lntxmtbfy {
  fill: currentColor;
  d: path("M11 17h2v-1h1q.425 0 .713-.288T15 15v-3q0-.425-.288-.712T14 11h-3v-1h4V8h-2V7h-2v1h-1q-.425 0-.712.288T9 9v3q0 .425.288.713T10 13h3v1H9v2h2zm-9 3V4h20v16z");
}
</style><path class="lntxmtbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-atm-sharp"} {...others} />);
}

export default Component;
