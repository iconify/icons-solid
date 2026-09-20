import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xjgczgztm {
  fill: currentColor;
  d: path("M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-92-96a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="xjgczgztm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dice-four-bold"} {...others} />);
}

export default Component;
