import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbxpw3nry {
  fill: currentColor;
  d: path("M6 11.423V5a3 3 0 1 1 6 0v6.423a5.473 5.473 0 1 1-6 0m13-6.155l1.5-.866a.998.998 0 0 1 1.5.866c0 .357-.191.687-.5.866L20 7l1.5.866a1 1 0 0 1-1 1.732L19 8.732v1.732a1 1 0 0 1-2 0V8.732l-1.5.866a1 1 0 0 1-1-1.732L16 7l-1.5-.866a1.002 1.002 0 0 1 0-1.732a1 1 0 0 1 1 0l1.5.866V3.536a1 1 0 0 1 2 0Z");
}
</style><path class="bbxpw3nry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thermometer-snowflake-fill-sharp"} {...others} />);
}

export default Component;
