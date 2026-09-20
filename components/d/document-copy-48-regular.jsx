import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mnwogux4e {
  fill: currentColor;
  d: path("M11.5 10.376V33.75a6.75 6.75 0 0 0 6.75 6.75h15.374A4.25 4.25 0 0 1 29.75 43h-11.5A9.25 9.25 0 0 1 9 33.75v-19.5a4.25 4.25 0 0 1 2.5-3.874M25.757 5a4.25 4.25 0 0 1 3.006 1.245l8.992 8.992A4.25 4.25 0 0 1 39 18.243V33.75A4.25 4.25 0 0 1 34.75 38h-16.5A4.25 4.25 0 0 1 14 33.75V9.25A4.25 4.25 0 0 1 18.25 5zM25 7.5h-6.75a1.75 1.75 0 0 0-1.75 1.75v24.5c0 .967.784 1.75 1.75 1.75h16.5a1.75 1.75 0 0 0 1.75-1.75V19h-7.25a4.25 4.25 0 0 1-4.245-4.044L25 14.75zm10.482 9L27.5 8.518v6.232a1.75 1.75 0 0 0 1.607 1.744l.143.006z");
}
</style><path class="mnwogux4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-copy-48-regular"} {...others} />);
}

export default Component;
