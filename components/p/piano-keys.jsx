import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k23gp735i {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h24v88H80Zm32 104a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8v56h-48v-56Zm40-16V48h24v88ZM48 48h16v96a8 8 0 0 0 8 8h16v56H48Zm160 160h-40v-56h16a8 8 0 0 0 8-8V48h16z");
}
</style><path class="k23gp735i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:piano-keys"} {...others} />);
}

export default Component;
