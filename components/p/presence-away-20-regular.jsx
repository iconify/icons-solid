import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nq7m4-hhg {
  fill: currentColor;
  d: path("M10 9.586V6.008a1 1 0 1 0-2 0V10a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414zm-10 .41C0 4.475 4.475 0 9.995 0s9.996 4.475 9.996 9.995s-4.475 9.996-9.996 9.996C4.475 19.99 0 15.516 0 9.995M9.995 2a7.995 7.995 0 1 0 0 15.99a7.995 7.995 0 0 0 0-15.99");
}
</style><path class="nq7m4-hhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-away-20-regular"} {...others} />);
}

export default Component;
