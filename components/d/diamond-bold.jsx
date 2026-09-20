import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zmr-dy30i {
  fill: currentColor;
  d: path("M238.16 113.89L142.1 17.83a20 20 0 0 0-28.21 0l-96 96.06a20 20 0 0 0 0 28.22l96.05 96.06a20 20 0 0 0 28.21 0l96-96.06a20 20 0 0 0 0-28.22ZM128 218.33L37.68 128L128 37.67L218.32 128Z");
}
</style><path class="zmr-dy30i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:diamond-bold"} {...others} />);
}

export default Component;
