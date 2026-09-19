import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j7yqk3boy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.995 27.276h11.787c.952 0 1.718.767 1.718 1.719v11.787c0 .952-.766 1.718-1.718 1.718H28.995a1.715 1.715 0 0 1-1.719-1.711V28.995c0-.952.767-1.719 1.719-1.719m-21.777 0h11.787c.952 0 1.719.767 1.719 1.719v11.787c0 .952-.767 1.718-1.719 1.718H7.218A1.714 1.714 0 0 1 5.5 40.79V28.995c0-.952.766-1.719 1.718-1.719M28.995 5.5h11.787c.952 0 1.718.766 1.718 1.718v11.787c0 .952-.766 1.719-1.718 1.719H28.995a1.715 1.715 0 0 1-1.719-1.711V7.218c0-.952.767-1.718 1.719-1.718m-21.777 0h11.787c.952 0 1.719.766 1.719 1.718v11.787c0 .952-.767 1.719-1.719 1.719H7.218a1.714 1.714 0 0 1-1.718-1.71V7.218c0-.952.766-1.718 1.718-1.718");
}
</style><path class="j7yqk3boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:greggs"} {...others} />);
}

export default Component;
