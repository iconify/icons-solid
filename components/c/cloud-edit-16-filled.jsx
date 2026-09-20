import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.areu60g2e {
  fill: currentColor;
  d: path("M8 2a4 4 0 0 0-3.97 3.507A3.25 3.25 0 0 0 4.25 12h1.225c.152-.501.426-.958.798-1.33l4.829-4.83c.248-.247.53-.44.83-.578A4 4 0 0 0 8 2m-1.02 9.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="areu60g2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cloud-edit-16-filled"} {...others} />);
}

export default Component;
