import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rkqaf6bku {
  fill: currentColor;
  d: path("M13 24a5 5 0 0 1 5 5v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3h1v-1a5 5 0 0 1 5-5m11-8.75A3.75 3.75 0 0 0 27.75 19H40v22a3 3 0 0 1-3 3H23.9q.099-.485.1-1V33c0-2.44-1.747-4.47-4.059-4.911A7.002 7.002 0 0 0 8 24.103V7a3 3 0 0 1 3-3h13zM13 35a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-8.5a2.5 2.5 0 0 0-2.5 2.5v1h5v-1a2.5 2.5 0 0 0-2.5-2.5m26.462-10H27.75c-.69 0-1.25-.56-1.25-1.25V4.464z");
}
</style><path class="rkqaf6bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-lock-48-filled"} {...others} />);
}

export default Component;
