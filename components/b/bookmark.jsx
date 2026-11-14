import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9_bctb9k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.625 2.25h6.75q1.398 0 2.386.989q.989.988.989 2.386V17.25q0 1.622-1.451 2.348t-2.749-.248l-1.425-1.069q-1.125-.844-2.25 0L9.45 19.35q-1.298.973-2.749.248q-1.451-.726-1.451-2.348V5.625q0-1.398.989-2.386q.988-.989 2.386-.989");
}
</style><path class="w9_bctb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:bookmark"} {...others} />);
}

export default Component;
