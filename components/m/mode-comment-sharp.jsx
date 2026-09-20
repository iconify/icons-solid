import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axd17qbjc {
  fill: currentColor;
  d: path("M2 18V2h20v20l-4-4z");
}
</style><path class="axd17qbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mode-comment-sharp"} {...others} />);
}

export default Component;
