import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jhfnm669a {
  fill: currentColor;
  d: path("M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-80-56v56H60V60Zm-56 80h56v56H60Zm80 56v-56h56v56Z");
}
</style><path class="jhfnm669a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:grid-four-bold"} {...others} />);
}

export default Component;
