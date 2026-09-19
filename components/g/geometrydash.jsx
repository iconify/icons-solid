import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qzvn2bz_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.07 30.91l13.853-13.852l3.323 3.324l-13.852 13.852zm-4.73-8.466l3.429-3.43l3.429 3.43l-3.43 3.429zm6.687-6.684l3.43-3.43l3.429 3.43l-3.43 3.43z");
}

.sqlnli29e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.471 23.994l20.5-20.5l20.498 20.5L23.97 44.493z");
}
</style><path class="sqlnli29e"/><path class="qzvn2bz_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:geometrydash"} {...others} />);
}

export default Component;
