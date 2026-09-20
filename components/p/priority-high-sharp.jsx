import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.symq3hbge {
  fill: currentColor;
  d: path("M12 18.846q-.413 0-.706-.293T11 17.846t.294-.706t.706-.294t.706.294t.294.706t-.294.707t-.706.293m-.73-3.807V4.154h1.46v10.885z");
}
</style><path class="symq3hbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:priority-high-sharp"} {...others} />);
}

export default Component;
