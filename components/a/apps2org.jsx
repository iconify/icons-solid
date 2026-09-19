import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b4dsejlog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.12 4.5a2 2 0 0 0-1.95 2v10.12l3.91 14v10.47c-.23 1.08 1.72 2.41 1.72 2.41h14.85a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95zM8.4 35.7v5.85a2 2 0 0 0 1.95 2h5.85a2 2 0 0 0 1.95-2V35.7a2 2 0 0 0-1.95-2h-5.85a2 2 0 0 0-1.95 2m0-10.12v4.64A1.58 1.58 0 0 0 10 31.8h4.64a1.58 1.58 0 0 0 1.58-1.58v-4.64a1.58 1.58 0 0 0-1.6-1.58H10a1.58 1.58 0 0 0-1.6 1.58");
}
</style><path class="b4dsejlog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:apps2org"} {...others} />);
}

export default Component;
