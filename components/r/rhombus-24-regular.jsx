import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkjz2mbcj {
  fill: currentColor;
  d: path("M5.807 5.408A2.25 2.25 0 0 1 7.894 4h12.858a2.25 2.25 0 0 1 2.087 3.092l-4.642 11.5A2.25 2.25 0 0 1 16.111 20H3.252a2.25 2.25 0 0 1-2.086-3.092zm2.087.092a.75.75 0 0 0-.696.47l-4.641 11.5a.75.75 0 0 0 .695 1.03h12.859a.75.75 0 0 0 .695-.47l4.642-11.5a.75.75 0 0 0-.696-1.03z");
}
</style><path class="nkjz2mbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rhombus-24-regular"} {...others} />);
}

export default Component;
