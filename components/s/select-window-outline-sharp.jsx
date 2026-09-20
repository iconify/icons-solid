import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itk4jibwr {
  fill: currentColor;
  d: path("M2 22V9h4V2h16v13h-4v7zm2-2h12v-7H4zm14-7h2V6H8v3h10z");
}
</style><path class="itk4jibwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:select-window-outline-sharp"} {...others} />);
}

export default Component;
