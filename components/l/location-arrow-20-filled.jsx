import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.x2stg5yfn {
  fill: currentColor;
  d: path("M16.638 2.07c.808-.312 1.603.483 1.292 1.292l-5.384 13.997c-.348.906-1.653.834-1.9-.105l-1.572-5.973a.5.5 0 0 0-.356-.356L2.745 9.353c-.94-.247-1.01-1.552-.105-1.9z");
}
</style><path class="x2stg5yfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:location-arrow-20-filled"} {...others} />);
}

export default Component;
