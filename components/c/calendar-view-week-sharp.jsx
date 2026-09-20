import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eyix29btp {
  fill: currentColor;
  d: path("M12.442 18.23V5.77h3.452v12.46zm-4.336 0V5.77h3.452v12.46zm-4.337 0V5.77h3.452v12.46zm13.01 0V5.77h3.452v12.46z");
}
</style><path class="eyix29btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:calendar-view-week-sharp"} {...others} />);
}

export default Component;
