import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.szd19nb9k {
  fill: currentColor;
  d: path("M12 11q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13t2.825 1.175T11 17t-1.175 2.825T7 21m10 0q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21");
}
</style><path class="szd19nb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:spoke-sharp"} {...others} />);
}

export default Component;
