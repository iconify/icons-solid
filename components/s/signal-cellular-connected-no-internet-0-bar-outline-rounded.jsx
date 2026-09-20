import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g0utmz-uv {
  fill: currentColor;
  d: path("M3.7 20.3L20.3 3.7q.475-.475 1.088-.213t.612.938V7q0 .425-.288.713T21 8t-.712-.288T20 7v-.175L6.825 20H17q.425 0 .713.288T18 21t-.288.713T17 22H4.425q-.675 0-.937-.612T3.7 20.3m16.588 1.413Q20 21.425 20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22t-.712-.288M20 17v-6q0-.425.288-.712T21 10t.713.288T22 11v6q0 .425-.288.713T21 18t-.712-.288T20 17");
}
</style><path class="g0utmz-uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-connected-no-internet-0-bar-outline-rounded"} {...others} />);
}

export default Component;
