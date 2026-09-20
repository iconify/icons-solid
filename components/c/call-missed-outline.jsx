import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx3y82b7n {
  fill: currentColor;
  d: path("M12.096 16.714L5 9.616v5.287H4v-7h7v1H5.708l6.388 6.388l7.216-7.215l.707.714z");
}
</style><path class="dx3y82b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-missed-outline"} {...others} />);
}

export default Component;
