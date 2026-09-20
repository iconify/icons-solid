import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6c1jpb7q {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm12.975 0l2.3-8.689L7.075 6l-2.3 8.63zm-.713-1.239L5.994 13.942L7.79 7.22l10.267 2.8zM4 18V6z");
}
</style><path class="h6c1jpb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-stable-outline-sharp"} {...others} />);
}

export default Component;
