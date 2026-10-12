import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqnv71b-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 11.9V7.6q0-.6.27-1.14l.71-1.42q.27-.54.54 0l.71 1.42q.27.54.27 1.14v4.3q0 .6-.6.6h-1.3q-.6 0-.6-.6m5.5 0V5.85q0-.6.27-1.14l.71-1.42q.27-.54.54 0l.71 1.42q.27.54.27 1.14v6.05q0 .6-.6.6h-1.3q-.6 0-.6-.6m5.5 0V8.6q0-.6.27-1.14l.71-1.42q.27-.54.54 0l.71 1.42q.27.54.27 1.14v3.3q0 .6-.6.6h-1.3q-.6 0-.6-.6m-11-2.65h2.5m3-1.5h2.5m3 1.75h2.5m-15 3h16.5v7a1.75 1.75 0 0 1-1.75 1.75h-13a1.75 1.75 0 0 1-1.75-1.75Z");
}
</style><path class="cqnv71b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crayons-box"} {...others} />);
}

export default Component;
