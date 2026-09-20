import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2bnb9bzw {
  fill: currentColor;
  d: path("m12 19l-7-7l7-7l7 7z");
}
</style><path class="f2bnb9bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-0"} {...others} />);
}

export default Component;
