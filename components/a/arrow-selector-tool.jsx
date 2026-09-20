import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ur1q23b4v {
  fill: currentColor;
  d: path("m13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725z");
}
</style><path class="ur1q23b4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-selector-tool"} {...others} />);
}

export default Component;
