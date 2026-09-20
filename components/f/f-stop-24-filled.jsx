import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rg794-qpn {
  fill: currentColor;
  d: path("M13.442 6.57a3 3 0 0 1 3.94-2.33l.59.205a1 1 0 0 0 .656-1.89l-.592-.205a5 5 0 0 0-6.566 3.883l-.728 4.267H7a1 1 0 0 0 0 2h3.4l-.69 4.042a3 3 0 0 1-4.403 2.123l-.075-.041a1 1 0 0 0-.964 1.752l.076.042c3.012 1.657 6.76-.15 7.338-3.54l.747-4.378H16a1 1 0 1 0 0-2h-3.23z");
}
</style><path class="rg794-qpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:f-stop-24-filled"} {...others} />);
}

export default Component;
