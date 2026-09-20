import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yfgv0hbtu {
  fill: currentColor;
  d: path("M224 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M60 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="yfgv0hbtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-three-fill"} {...others} />);
}

export default Component;
