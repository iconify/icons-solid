import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjxbi-ojd {
  fill: currentColor;
  d: path("m9 18l-6-6l6-6l1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6z");
}
</style><path class="hjxbi-ojd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-return-outline"} {...others} />);
}

export default Component;
