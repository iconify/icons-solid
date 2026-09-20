import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohgwrpa9t {
  fill: currentColor;
  d: path("M4 5v12zm4 16v-2H2V3h11.35q-.175.475-.262.975T13 5H4v12h16v-6.075q.55-.1 1.05-.275t.95-.45V19h-6v2zM18 9V6h-3V4h3V1h2v3h3v2h-3v3z");
}
</style><path class="ohgwrpa9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:display-add-outline-sharp"} {...others} />);
}

export default Component;
