import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xyd0zfjdb {
  fill: currentColor;
  d: path("M46 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m20 64V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14m12 0a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2V64a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2Zm152 48v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z");
}
</style><path class="xyd0zfjdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-left-light"} {...others} />);
}

export default Component;
