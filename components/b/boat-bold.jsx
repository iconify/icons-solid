import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.is0jk5bfr {
  fill: currentColor;
  d: path("M222.33 106.79L212 103.35V56a20 20 0 0 0-20-20h-52V24a12 12 0 0 0-24 0v12H64a20 20 0 0 0-20 20v47.35l-10.33 3.44a20 20 0 0 0-13.67 19V152c0 64.63 100.8 90.57 105.09 91.64a11.94 11.94 0 0 0 5.82 0C135.2 242.57 236 216.63 236 152v-26.23a20 20 0 0 0-13.67-18.98M68 60h120v35.35l-56.21-18.73a11.85 11.85 0 0 0-7.58 0L68 95.35Zm144 92c0 36.69-58.08 60.43-84 67.59c-25.94-7.17-84-30.9-84-67.59v-23.35l72-24V168a12 12 0 0 0 24 0v-63.35l72 24Z");
}
</style><path class="is0jk5bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:boat-bold"} {...others} />);
}

export default Component;
