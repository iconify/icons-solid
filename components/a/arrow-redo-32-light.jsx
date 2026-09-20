import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.jd4r3r-7k {
  fill: currentColor;
  d: path("M25.995 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h10.793l-9.07-9.07a6.571 6.571 0 1 0-9.293 9.292l12.924 12.925a.5.5 0 0 1-.707.707L6.218 15.93A7.571 7.571 0 0 1 16.925 5.222l9.07 9.07z");
}
</style><path class="jd4r3r-7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-redo-32-light"} {...others} />);
}

export default Component;
