import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ao849hbih {
  fill: currentColor;
  d: path("M8 16h8V8H8zm-5 5V3h18v18z");
}
</style><path class="ao849hbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dialogs-sharp"} {...others} />);
}

export default Component;
