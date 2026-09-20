import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oalzcobfl {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-88 128h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16M32 88V64h192v24Z");
}
</style><path class="oalzcobfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:credit-card-fill"} {...others} />);
}

export default Component;
