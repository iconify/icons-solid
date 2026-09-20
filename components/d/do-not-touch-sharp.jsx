import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-7x8ybuq {
  fill: currentColor;
  d: path("m21 18.15l-5.975-5.975H15V2h2v10.175h2V4h2zm-8-8l-2-2V1h2zm-4-4l-2-2V3h2zM8.475 23L1.2 12.375l1.725-1.65L7 13.575v-3.75L.675 3.5L2.1 2.075l20.3 20.3l-1.425 1.425l-.8-.8z");
}
</style><path class="b-7x8ybuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:do-not-touch-sharp"} {...others} />);
}

export default Component;
