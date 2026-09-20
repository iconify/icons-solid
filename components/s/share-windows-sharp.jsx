import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwyq_eb-p {
  fill: currentColor;
  d: path("M7 15V7h10.15l-2.575-2.575L16 3l5 5l-5 5l-1.425-1.4L17.15 9H9v6zm-4 6V4h2v15h12v-4h2v6z");
}
</style><path class="gwyq_eb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:share-windows-sharp"} {...others} />);
}

export default Component;
