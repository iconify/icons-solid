import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oifwthb4m {
  fill: currentColor;
  d: path("m14 7l-5 5l5 5z");
}
</style><path class="oifwthb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-arrow-left"} {...others} />);
}

export default Component;
