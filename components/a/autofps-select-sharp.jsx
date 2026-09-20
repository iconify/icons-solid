import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-wkq6ble {
  fill: currentColor;
  d: path("m10.95 9.316l1-2.747h.062l1.038 2.747zM12.005 14q-2.082 0-3.544-1.457T7 9.005T8.457 5.46T11.995 4t3.544 1.457T17 8.996t-1.457 3.542T12.005 14M9.21 11.73h.816l.65-1.684h2.646l.65 1.685h.893l-2.574-6.462h-.634zM3.847 21.5v-4h1v4zm3.385 0v-4h1v4zm3.384 0v-4h1v4zm3.385 0v-4h6.154v4z");
}
</style><path class="s-wkq6ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:autofps-select-sharp"} {...others} />);
}

export default Component;
