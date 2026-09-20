import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.tbd6rebka {
  fill: currentColor;
  d: path("M9 4.553v22.6l5.484-7.508a4 4 0 0 1 3.23-1.64h8.499zM7 3.486C7 2.253 8.42 1.56 9.391 2.32l18.991 14.84c1.192.931.534 2.844-.979 2.844h-9.69a2 2 0 0 0-1.614.82l-6.225 8.523C8.966 30.59 7 29.948 7 28.41z");
}
</style><path class="tbd6rebka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cursor-32-regular"} {...others} />);
}

export default Component;
