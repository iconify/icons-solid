import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.up1q3xb9d {
  fill: currentColor;
  d: path("m4.375 21l-1.4-1.4l10.25-10.25q-.45-1.05-.125-2.375T14.525 4.6q1.325-1.325 2.95-1.55t2.65.8t.8 2.65t-1.55 2.95q-1.05 1.1-2.375 1.425t-2.375-.125L13.375 12l7.6 7.6l-1.4 1.4l-7.6-7.55zm2.95-8.55l-3-3q-1.35-1.35-1.35-3.225T4.325 3l6.2 6.25z");
}
</style><path class="up1q3xb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-dining-sharp"} {...others} />);
}

export default Component;
