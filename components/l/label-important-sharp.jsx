import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dq-1kubxi {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-6 8z");
}
</style><path class="dq-1kubxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-important-sharp"} {...others} />);
}

export default Component;
