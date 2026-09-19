import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.coq8lpxhb {
  fill: currentColor;
  d: path("M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 2v10H6V7zm-4 5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75S9 12.41 9 12m7.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75");
}
</style><path class="coq8lpxhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-smart-screen"} {...others} />);
}

export default Component;
