import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.spj3yrbgo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 9v7.125q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624V9q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-19q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094t-.093-.113q-.042-.062-.07-.13t-.043-.14T1.75 9");
}
</style><path class="spj3yrbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:top-nav"} {...others} />);
}

export default Component;
