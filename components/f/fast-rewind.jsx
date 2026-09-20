import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n32iw0bmf {
  fill: currentColor;
  d: path("m21.5 18l-9-6l9-6zm-10 0l-9-6l9-6z");
}
</style><path class="n32iw0bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fast-rewind"} {...others} />);
}

export default Component;
