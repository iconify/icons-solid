import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.g_bmejbho {
  fill: currentColor;
  d: path("M5 6a3 3 0 0 1 5.83-1h1.044a4.002 4.002 0 0 0-7.844.507A3.25 3.25 0 0 0 4.25 12h4.533l.518-1H4.25a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 6m8.996 3.405a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V7H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504zM9.909 12l-.798 1.54A1 1 0 0 0 10 15h4.998a1 1 0 0 0 .888-1.46L15.087 12z");
}
</style><path class="g_bmejbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cloud-beaker-16-regular"} {...others} />);
}

export default Component;
