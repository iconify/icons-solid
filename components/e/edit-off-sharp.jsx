import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thgdtob0g {
  fill: currentColor;
  d: path("M15.55 12.675L11.325 8.45l6.3-6.3l4.2 4.275zM19.8 22.6l-7.075-7.05L7.25 21H3v-4.225L8.475 11.3L1.4 4.2l1.425-1.425l18.4 18.4zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z");
}
</style><path class="thgdtob0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:edit-off-sharp"} {...others} />);
}

export default Component;
