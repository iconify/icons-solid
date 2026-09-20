import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pakf59b3a {
  fill: currentColor;
  d: path("M7 21v-6.2l-1.1 1.75l-1.7-1.05L12 3l7.8 12.5l-1.7 1.05L17 14.8V21h-4v-5h-2v5zm4-7h2v-2h-2z");
}
</style><path class="pakf59b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bungalow-sharp"} {...others} />);
}

export default Component;
