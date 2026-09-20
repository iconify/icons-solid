import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xgezz0zyv {
  fill: currentColor;
  d: path("M1 19V5h22v14Zm5-2h12V7H6Zm-3 0h1V7H3Zm17 0h1V7h-1ZM3 17V7h1v10Zm17 0V7h1v10Z");
}
</style><path class="xgezz0zyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stay-primary-landscape-sharp"} {...others} />);
}

export default Component;
