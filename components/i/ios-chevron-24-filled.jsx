import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ck_e8lf_y {
  d: path("M13.293 4.293a1 1 0 0 0 0 1.414L19.586 12l-6.293 6.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="ck_e8lf_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ios-chevron-24-filled"} {...others} />);
}

export default Component;
