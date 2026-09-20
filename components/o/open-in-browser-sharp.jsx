import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pbeh52b0p {
  fill: currentColor;
  d: path("M4 20V4h16v16h-4.73v-1H19V7H5v12h3.73v1zm7.5 0v-6.304l-2.1 2.1l-.708-.719L12 11.769l3.308 3.308l-.708.72l-2.1-2.1V20z");
}
</style><path class="pbeh52b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-in-browser-sharp"} {...others} />);
}

export default Component;
