import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lwk1-qxzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.309 33.926H24v-18.66c0-.658.533-1.192 1.192-1.192h17.117c.658 0 1.191.534 1.191 1.192v17.468c0 .658-.533 1.192-1.191 1.192m-18.309 0H5.691A1.19 1.19 0 0 1 4.5 32.734V15.266c0-.658.533-1.192 1.191-1.192h5.314C18.182 14.074 24 19.893 24 27.07");
}
</style><path class="lwk1-qxzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:finn-no"} {...others} />);
}

export default Component;
