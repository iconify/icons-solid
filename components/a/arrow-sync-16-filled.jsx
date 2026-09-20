import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.mp3qp1btz {
  fill: currentColor;
  d: path("M6.97.47a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06L8.03 5.03a.75.75 0 0 1-1.06-1.06l.43-.43a4.5 4.5 0 0 0-2.28 7.918a.75.75 0 0 1-.961 1.152A6 6 0 0 1 7.463 2.024L6.97 1.53a.75.75 0 0 1 0-1.06m3.815 3.016a.75.75 0 0 1 1.056-.096a6 6 0 0 1-3.304 10.586l.493.494a.75.75 0 1 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 1.06l-.43.43a4.5 4.5 0 0 0 2.28-7.918a.75.75 0 0 1-.095-1.056");
}
</style><path class="mp3qp1btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sync-16-filled"} {...others} />);
}

export default Component;
