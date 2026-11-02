import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6s3eybga {
  fill: currentColor;
  d: path("M12.57 6.58A6.98 6.98 0 0 1 18 4h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-2v2h4a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h4v-3H9a7 7 0 0 1-7-7V3a1 1 0 0 1 1-1h3a7.01 7.01 0 0 1 6.57 4.58");
}
</style><path class="a6s3eybga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:potted-plant-fill"} {...others} />);
}

export default Component;
