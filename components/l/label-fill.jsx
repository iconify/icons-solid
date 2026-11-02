import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eocp1pbhi {
  fill: currentColor;
  d: path("M13 5c1.039 0 1.992.578 2.707 1.293l4 4a2.414 2.414 0 0 1 0 3.414l-4 4C14.992 18.422 14.039 19 13 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z");
}
</style><path class="eocp1pbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:label-fill"} {...others} />);
}

export default Component;
