import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ut42bqbgi {
  fill: currentColor;
  d: path("M4 4v9.586l2.293-2.293a2.414 2.414 0 0 1 3.414 0l2 2a.414.414 0 0 0 .586 0l8-8a.999.999 0 1 1 1.414 1.414l-8 8a2.414 2.414 0 0 1-3.414 0l-2-2a.414.414 0 0 0-.586 0L4 16.414V18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0");
}
</style><path class="ut42bqbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-line-fill"} {...others} />);
}

export default Component;
