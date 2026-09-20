import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gripr69wu {
  fill: currentColor;
  d: path("M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z");
}
</style><path class="gripr69wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-minimize-rounded"} {...others} />);
}

export default Component;
