import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yr53fh_vh {
  fill: currentColor;
  d: path("M3 11h18v2H3zm9.003-8a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M12 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m.003 10a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M12 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="yr53fh_vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-divide"} {...others} />);
}

export default Component;
