import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xb1mfobkx {
  fill: currentColor;
  d: path("M186 72V54H76.48l56.21 70.25a6 6 0 0 1 0 7.5L76.48 202H186v-18a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6H64a6 6 0 0 1-4.69-9.75l61-76.25l-61-76.25A6 6 0 0 1 64 42h128a6 6 0 0 1 6 6v24a6 6 0 0 1-12 0");
}
</style><path class="xb1mfobkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sigma-light"} {...others} />);
}

export default Component;
