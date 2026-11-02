import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lg5im6xfz {
  fill: currentColor;
  d: path("M2 17V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V4H4v12h5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1M17 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm1 15a1.002 1.002 0 0 1-1.707.707L15 20.414l-1.293 1.293A1 1 0 0 1 12 21v-5.62a3.828 3.828 0 0 1 5.601-5.189A3.83 3.83 0 0 1 18 15.38ZM9 10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><path class="lg5im6xfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:certificate-fill-sharp"} {...others} />);
}

export default Component;
