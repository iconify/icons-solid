import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thm2g42fm {
  fill: currentColor;
  d: path("M10.75 5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3.5v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11H10V5.75a.75.75 0 0 1 .75-.75m8.55.291c.6-.611 1.704-.204 1.705.71V14.5h1.246a.75.75 0 0 1 0 1.5h-1.246v2.25a.751.751 0 0 1-1.5 0V16h-5.342a1.25 1.25 0 0 1-1.023-1.969l6.047-8.603zM14.644 14.5h4.86V7.583z");
}
</style><path class="thm2g42fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-header-4-24-regular"} {...others} />);
}

export default Component;
