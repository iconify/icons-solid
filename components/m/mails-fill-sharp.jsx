import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgs6b856j {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0ZM4.414 9l-1-1h13.172l-6 6H9.414ZM2 9.414l6.293 6.293A1 1 0 0 0 9 16h2c.265 0 .52-.105.707-.293L18 9.414V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="wgs6b856j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mails-fill-sharp"} {...others} />);
}

export default Component;
