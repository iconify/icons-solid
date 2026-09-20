import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c2ch8svrj {
  fill: currentColor;
  d: path("m152.41 88.56l-89.6 88a12 12 0 0 1-16.82 0l-38.4-37.71a12 12 0 0 1 16.82-17.13l30 29.46l81.19-79.74a12 12 0 0 1 16.82 17.12Zm96.15-17a12 12 0 0 0-17-.15l-81.16 79.77l-7.88-7.74a12 12 0 0 0-16.82 17.12l16.29 16a12 12 0 0 0 16.82 0l89.6-88a12 12 0 0 0 .15-16.97Z");
}
</style><path class="c2ch8svrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:checks-bold"} {...others} />);
}

export default Component;
