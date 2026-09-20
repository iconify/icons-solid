import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p9j1aab-o {
  fill: currentColor;
  d: path("M6 18V2h16v16zm2-2h12V8h-7V4H8zm-6 6V6h2v14h14v2zM8 4v12z");
}
</style><path class="p9j1aab-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-group-outline-sharp"} {...others} />);
}

export default Component;
