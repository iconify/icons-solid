import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgi27wbjh {
  fill: currentColor;
  d: path("M6 22V2h8.077v3.5H7v13h10v-2h1V22zm12-8.711L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z");
}
</style><path class="hgi27wbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:install-mobile-sharp"} {...others} />);
}

export default Component;
