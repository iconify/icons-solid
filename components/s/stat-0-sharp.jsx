import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ti33s4bvw {
  fill: currentColor;
  d: path("M12 17.577L6.423 12L12 6.423L17.577 12z");
}
</style><path class="ti33s4bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-0-sharp"} {...others} />);
}

export default Component;
