import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rz5u8hbns {
  fill: currentColor;
  d: path("M22.83 12.83L12 2H2v10l10.83 10.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5S7.33 8 6.5 8");
}
</style><path class="rz5u8hbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sell"} {...others} />);
}

export default Component;
