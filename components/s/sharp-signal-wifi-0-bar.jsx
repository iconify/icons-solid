import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_5qn7huh {
  fill: currentColor;
  d: path("M12 4C7.31 4 3.07 5.9 0 8.98L12 21L24 8.98A16.88 16.88 0 0 0 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z");
}
</style><path class="t_5qn7huh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-signal-wifi-0-bar"} {...others} />);
}

export default Component;
