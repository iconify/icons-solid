import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qqsgtklth {
  fill: currentColor;
  d: path("M24 9a3.75 3.75 0 0 0-3.75 3.75v15.207l-.484.445a6.25 6.25 0 1 0 8.467 0l-.483-.445V12.75A3.75 3.75 0 0 0 24 9m-6.75 3.75a6.75 6.75 0 0 1 13.5 0v13.925a9.25 9.25 0 1 1-13.5 0zM28 33a4 4 0 1 1-5.5-3.71V18.5a1.5 1.5 0 0 1 3 0v10.79A4 4 0 0 1 28 33");
}
</style><path class="qqsgtklth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:temperature-48-filled"} {...others} />);
}

export default Component;
