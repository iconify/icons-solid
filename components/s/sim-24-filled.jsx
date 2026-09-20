import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9mbd1bio {
  fill: currentColor;
  d: path("M4 5.25A3.25 3.25 0 0 1 7.25 2h5.464a3.25 3.25 0 0 1 2.299.952l4.035 4.035c.61.61.952 1.437.952 2.299v9.464A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75zM7.75 14H12v-3.25H9.25a1.5 1.5 0 0 0-1.5 1.5zm0 1.5v1.25a1.5 1.5 0 0 0 1.5 1.5H12V15.5zm5.75 2.75h1.25a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5H13.5z");
}
</style><path class="k9mbd1bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:sim-24-filled"} {...others} />);
}

export default Component;
