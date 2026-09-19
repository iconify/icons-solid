import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gbsgqotvf {
  fill: currentColor;
  d: path("M7.8 7.2L9 10H7L5.87 7.33H4V10H2V2h7v5.2zM7 4H4v1.33h3z");
}
</style><path class="gbsgqotvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-r-mobiledata"} {...others} />);
}

export default Component;
