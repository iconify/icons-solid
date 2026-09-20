import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jtvl7kbup {
  fill: currentColor;
  d: path("M7.55 19.35L.65 5.55l1.8-.875l6.9 13.75zm4.675 0l-6.9-13.8l1.8-.9L14 18.425zm4.675 0L10 5.55l1.775-.9l6.9 13.775zm4.65-.025L14.675 5.55l1.775-.9l6.9 13.8z");
}
</style><path class="jtvl7kbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:rainy-heavy-outline-sharp"} {...others} />);
}

export default Component;
