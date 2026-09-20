import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3e4v489a {
  fill: currentColor;
  d: path("M13.577 15.5H18v-7h-4.423zM5 16.5v-9h5.577v1H6v7h4.577v1zm7.577 0v-9H19v9z");
}
</style><path class="p3e4v489a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:language-us-colemak-outline-sharp"} {...others} />);
}

export default Component;
