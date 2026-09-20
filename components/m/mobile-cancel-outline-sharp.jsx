import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t121k3bbj {
  fill: currentColor;
  d: path("m9.65 15.058l2.35-2.35l2.35 2.35l.708-.708l-2.35-2.35l2.35-2.35l-.708-.708l-2.35 2.35l-2.35-2.35l-.708.708l2.35 2.35l-2.35 2.35zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="t121k3bbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-cancel-outline-sharp"} {...others} />);
}

export default Component;
