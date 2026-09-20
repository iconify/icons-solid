import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9nq6hzxc {
  fill: currentColor;
  d: path("M3 20V4h2v16zm16 0V4h2v16zM7.35 17L11.1 7h1.8l3.75 10H14.9l-.85-2.55H10L9.1 17zm3.15-4h3l-1.45-4.15z");
}
</style><path class="x9nq6hzxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-letter-spacing-wide"} {...others} />);
}

export default Component;
