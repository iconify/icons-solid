import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dkl080bfi {
  fill: currentColor;
  d: path("M1 19V5h22v14zm5-2h12V7H6z");
}
</style><path class="dkl080bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stay-current-landscape-sharp"} {...others} />);
}

export default Component;
