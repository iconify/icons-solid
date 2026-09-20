import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u8q-hpbds {
  fill: currentColor;
  d: path("M16.5 18V6h2v12zm-11 0V6l9 6z");
}
</style><path class="u8q-hpbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:skip-next-sharp"} {...others} />);
}

export default Component;
