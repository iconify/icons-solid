import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrjlbih3m {
  fill: currentColor;
  d: path("M20 15V7H6V2h16v13zM2 22V9h16v13z");
}
</style><path class="nrjlbih3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:select-window-2-sharp"} {...others} />);
}

export default Component;
