import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.momrs7b9k {
  fill: currentColor;
  d: path("M3 12a9 9 0 0 1 13.977-7.5H12a7.5 7.5 0 1 0 0 15V18h6.708A9 9 0 0 1 3 12m15.225-6.5H12V7h7.485a9 9 0 0 0-1.26-1.5M12 8h8.064q.358.717.584 1.5H12zm8.876 2.5H12V12h9q-.001-.767-.124-1.5M12 13h8.945a9 9 0 0 1-.297 1.5H12zm8.294 2.5H12V17h7.485a9 9 0 0 0 .81-1.5");
}
</style><path class="momrs7b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:blur-24-regular"} {...others} />);
}

export default Component;
