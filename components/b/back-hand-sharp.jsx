import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hz2wm2z3y {
  fill: currentColor;
  d: path("M12.57 22q-1.936 0-3.62-.928t-2.72-2.584l-3.8-6.107l.907-.906L8 14.555V4.5h1v7h2.673v-9h1v9h2.673v-8h1v8H19V5h1v9.589q0 3.095-2.164 5.253Q15.674 22 12.57 22");
}
</style><path class="hz2wm2z3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:back-hand-sharp"} {...others} />);
}

export default Component;
