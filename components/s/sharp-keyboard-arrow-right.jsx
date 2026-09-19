import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk4hx468i {
  fill: currentColor;
  d: path("M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z");
}
</style><path class="fk4hx468i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-keyboard-arrow-right"} {...others} />);
}

export default Component;
