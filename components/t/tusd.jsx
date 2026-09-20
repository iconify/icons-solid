import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttuifqhjm {
  fill: var(--svg-color--1b5aff, #1b5aff);
  d: path("M9 3H3v6a6 6 0 0 0 6-6m0 18V8.994C9 5.682 11.478 3 14.844 3H21v6h-6v12z");
}
</style><path class="ttuifqhjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:tusd"} {...others} />);
}

export default Component;
