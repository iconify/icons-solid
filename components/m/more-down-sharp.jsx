import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njq-t5b9p {
  fill: currentColor;
  d: path("M5 19V8h2v9h9v2zm5-5V3h2v9h9v2z");
}
</style><path class="njq-t5b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:more-down-sharp"} {...others} />);
}

export default Component;
