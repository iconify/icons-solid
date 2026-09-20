import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nwxijmqss {
  fill: currentColor;
  d: path("M7.5 20v-2.808h-2v-1h2v-2.73h-2v-1h2V4h6.27q1.978 0 3.354 1.375T18.5 8.727t-1.376 3.356t-3.355 1.379H8.5v2.73h4v1h-4V20zm1-7.539h5.27q1.545 0 2.638-1.092T17.5 8.73t-1.092-2.638Q15.314 5 13.769 5H8.5z");
}
</style><path class="nwxijmqss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:currency-ruble"} {...others} />);
}

export default Component;
