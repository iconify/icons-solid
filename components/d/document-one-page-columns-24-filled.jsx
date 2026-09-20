import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bs-mjtb0l {
  fill: currentColor;
  d: path("M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v15.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75zM8.75 5a.75.75 0 0 0-.75.75v12.5a.75.75 0 0 0 1.5 0V5.75A.75.75 0 0 0 8.75 5m7.25.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="bs-mjtb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-one-page-columns-24-filled"} {...others} />);
}

export default Component;
