import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewjs6k70f {
  fill: currentColor;
  d: path("M13.413 14.913Q14 14.325 14 13.5t-.587-1.412T12 11.5t-1.412.588T10 13.5t.588 1.413T12 15.5t1.413-.587M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4z");
}
</style><path class="ewjs6k70f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:enterprise-sharp"} {...others} />);
}

export default Component;
