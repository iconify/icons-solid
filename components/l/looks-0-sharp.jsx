import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uc2pw_b0v {
  fill: currentColor;
  d: path("M3 21V3h18v18zm6-4h6V7H9zm2-2V9h2v6z");
}
</style><path class="uc2pw_b0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-0-sharp"} {...others} />);
}

export default Component;
