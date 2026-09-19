import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.umy8kdbsc {
  fill: currentColor;
  d: path("M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98z");
}
</style><path class="umy8kdbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-near-me"} {...others} />);
}

export default Component;
