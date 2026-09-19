import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2qqsnb4n {
  fill: currentColor;
  d: path("M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z");
}
</style><path class="j2qqsnb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-auto-awesome-motion"} {...others} />);
}

export default Component;
