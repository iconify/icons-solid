import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3ssl-bhu {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h12v-6h-5v1.8q.35.25.55.625t.2.825q0 .725-.513 1.238T12 18t-1.237-.513t-.513-1.237q0-.45.2-.812t.55-.613V13H6z");
}
</style><path class="z3ssl-bhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:roller-shades-sharp"} {...others} />);
}

export default Component;
