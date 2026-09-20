import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tn9fb5bmk {
  fill: currentColor;
  d: path("m6 18l12-6L6 6v4.35L11 12l-5 1.65zm-3 3V3h18v18z");
}
</style><path class="tn9fb5bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:outbox-alt-sharp"} {...others} />);
}

export default Component;
