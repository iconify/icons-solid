import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d92lyn2ge {
  fill: currentColor;
  d: path("M8 13.75L9.975 11h4.25L8 6.1zM13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725zm-3.8-11");
}
</style><path class="d92lyn2ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-selector-tool-outline-sharp"} {...others} />);
}

export default Component;
