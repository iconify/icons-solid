import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l8loqt5ak {
  fill: currentColor;
  d: path("m7.8 7l1.175-3.875V1h2v2H13V1h2v2l1.2 4zM2 22V11h2v2h16v-2h2v11h-9v-5h-2v5zm4.6-11l.6-2h9.6l.6 2z");
}
</style><path class="l8loqt5ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:temple-hindu"} {...others} />);
}

export default Component;
