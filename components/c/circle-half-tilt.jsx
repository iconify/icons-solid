import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jwu-6-b9e {
  fill: currentColor;
  d: path("M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M184 195.87a87 87 0 0 1-16 10.5V99.31l16-16Zm-80-32.56l16-16v68.28a88.4 88.4 0 0 1-16-3Zm-16 43.06a87 87 0 0 1-16.3-10.76l16.3-16.3Zm48-75.06l16-16v97.32a88.4 88.4 0 0 1-16 3ZM40 128a88 88 0 0 1 144.3-67.61L60.38 184.31A87.34 87.34 0 0 1 40 128m160 50.59V77.41a88 88 0 0 1 0 101.18");
}
</style><path class="jwu-6-b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circle-half-tilt"} {...others} />);
}

export default Component;
