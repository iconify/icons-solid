import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mehmunbaa {
  fill: currentColor;
  d: path("m9.9 15.5l3.1-3.1V15h2V9H9v2h2.6l-3.1 3.1zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="mehmunbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-arrow-up-right-outline-sharp"} {...others} />);
}

export default Component;
