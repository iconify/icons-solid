import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynr9jzg2v {
  fill: currentColor;
  d: path("M5.116 13V5h5.5v1h-4.5v2.5h4.5V13zm1-1h3.5V9.5h-3.5zm7.269 1V5h5.5v8zm1-1h3.5V6h-3.5zM3.846 21.5v-4h1v4zm3.385 0v-4h1v4zm3.384 0v-4h1v4zm3.385 0v-4h6.154v4z");
}
</style><path class="ynr9jzg2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:60fps-select-sharp"} {...others} />);
}

export default Component;
