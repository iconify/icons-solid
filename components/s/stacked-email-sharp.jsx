import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l4nkphb8b {
  fill: currentColor;
  d: path("M5 16.77v-13h17v13zm-3 3V8.653h1v10.115h15.385v1zm11.5-8.283L21 5.943V4.77l-7.5 5.543L6 4.769v1.175z");
}
</style><path class="l4nkphb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stacked-email-sharp"} {...others} />);
}

export default Component;
