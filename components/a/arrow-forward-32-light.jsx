import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.jwi165bwq {
  fill: currentColor;
  d: path("M21.146 6.854a.5.5 0 0 1 .708-.708l7 7a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708L27.293 14H15.5C9.149 14 4 19.149 4 25.5a.5.5 0 0 1-1 0C3 18.596 8.596 13 15.5 13h11.793z");
}
</style><path class="jwi165bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-forward-32-light"} {...others} />);
}

export default Component;
