import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.befgeybsx {
  fill: currentColor;
  d: path("M15.308 15h-1v3.23h-3.231v1h4.23zM8.769 9h1V5.77H13v-1H8.77zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="befgeybsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:screenshot-outline-sharp"} {...others} />);
}

export default Component;
