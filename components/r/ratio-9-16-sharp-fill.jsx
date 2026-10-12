import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhetbv5ea {
  fill: currentColor;
  d: path("M6 1L18 1C18.5523 1 19 1.4477 19 2L19 22C19 22.5523 18.5523 23 18 23L6 23C5.4477 23 5 22.5523 5 22L5 2C5 1.4477 5.4477 1 6 1Z");
}
</style><path class="fhetbv5ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ratio-9-16-sharp-fill"} {...others} />);
}

export default Component;
