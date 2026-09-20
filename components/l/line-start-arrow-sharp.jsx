import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kel900s3c {
  fill: currentColor;
  d: path("M11.808 16.827L4.212 12l7.596-4.827V11.5h9.115v1h-9.115z");
}
</style><path class="kel900s3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-arrow-sharp"} {...others} />);
}

export default Component;
