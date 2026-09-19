import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dy76dkb7p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z");
}
</style><path class="dy76dkb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-greater-than"} {...others} />);
}

export default Component;
