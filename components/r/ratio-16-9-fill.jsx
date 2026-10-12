import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mh_9be5hp {
  fill: currentColor;
  d: path("M1 9C1 6.7909 2.7909 5 5 5L19 5C21.2091 5 23 6.7909 23 9L23 15C23 17.2091 21.2091 19 19 19L5 19C2.7909 19 1 17.2091 1 15L1 9Z");
}
</style><path class="mh_9be5hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ratio-16-9-fill"} {...others} />);
}

export default Component;
