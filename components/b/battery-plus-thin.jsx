import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bhmu31bdy {
  fill: currentColor;
  d: path("M148 128a4 4 0 0 1-4 4h-24v24a4 4 0 0 1-8 0v-24H88a4 4 0 0 1 0-8h24v-24a4 4 0 0 1 8 0v24h24a4 4 0 0 1 4 4m72-48v96a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h168a12 12 0 0 0 12-12Zm36 12a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4");
}
</style><path class="bhmu31bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-plus-thin"} {...others} />);
}

export default Component;
