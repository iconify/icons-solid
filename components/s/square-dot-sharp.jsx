import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jfbx2acpa {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm7-3.75q-1.362 0-2.306-.944T8.75 12t.944-2.306T12 8.75t2.306.944T15.25 12t-.944 2.306T12 15.25");
}
</style><path class="jfbx2acpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:square-dot-sharp"} {...others} />);
}

export default Component;
