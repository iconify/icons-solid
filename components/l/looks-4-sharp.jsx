import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iebu0_9tw {
  fill: currentColor;
  d: path("M3 21V3h18v18zm10-4h2V7h-2v4h-2V7H9v6h4z");
}
</style><path class="iebu0_9tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-4-sharp"} {...others} />);
}

export default Component;
