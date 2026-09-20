import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhz8apicj {
  fill: currentColor;
  d: path("M7.49 2.87a.75.75 0 1 0-1.48-.24l-3 18.5a.75.75 0 1 0 1.48.24zm10.5-.24a.75.75 0 1 0-1.48.24l3 18.5a.75.75 0 1 0 1.48-.24zm-5.24.12a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zm-1.5 11a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm0 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="uhz8apicj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:highway-24-regular"} {...others} />);
}

export default Component;
