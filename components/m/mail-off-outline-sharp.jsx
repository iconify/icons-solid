import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfg32rd8r {
  fill: currentColor;
  d: path("M19.775 22.625L17.15 20H2V4h2l2 2H4v12h11.15L1.375 4.225L2.8 2.8l18.4 18.4zM22 19.15l-2-2V8l-5.625 3.525L13.15 10.3L20 6H8.85l-2-2H22z");
}
</style><path class="cfg32rd8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mail-off-outline-sharp"} {...others} />);
}

export default Component;
