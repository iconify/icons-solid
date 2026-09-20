import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccll7pbow {
  fill: currentColor;
  d: path("M12.75 19V5h3.375v14zm-4.875 0V5h3.375v14zM3 19V5h3.375v14zm14.625 0V5H21v14z");
}
</style><path class="ccll7pbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:calendar-view-week-sharp"} {...others} />);
}

export default Component;
