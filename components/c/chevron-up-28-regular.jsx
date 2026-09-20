import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.lsy0k9k9k {
  fill: currentColor;
  d: path("M23.78 18.53a.75.75 0 0 1-1.06 0L14 9.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l9.25-9.25a.75.75 0 0 1 1.06 0l9.25 9.25a.75.75 0 0 1 0 1.06");
}
</style><path class="lsy0k9k9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-up-28-regular"} {...others} />);
}

export default Component;
