import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b73qsnz7i {
  fill: currentColor;
  d: path("M10.0605 2.7073C11.1795 1.7593 12.8205 1.7593 13.9395 2.7073L20.9395 8.6379L21.0615 8.7483C21.6586 9.3132 22 10.1004 22 10.927L22 19.0002C21.9999 20.657 20.6568 22.0002 19 22.0002L16 22.0002L16 13.0002L8 13.0002L8 22.0002L5 22.0002C3.3432 22.0002 2.0001 20.657 2 19.0002L2 10.927C2 10.0454 2.3878 9.2079 3.0605 8.6379L10.0605 2.7073Z");
}
</style><path class="b73qsnz7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:home-fill"} {...others} />);
}

export default Component;
