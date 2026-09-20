import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfiw_2btz {
  fill: currentColor;
  d: path("M18.25 2a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75m-13 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 5.25 2m7.25.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="dfiw_2btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-align-left-rotate-90-24-regular"} {...others} />);
}

export default Component;
