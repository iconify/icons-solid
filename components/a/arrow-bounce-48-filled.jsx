import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yv3c5fbpy {
  fill: currentColor;
  d: path("M4 14.5A1.5 1.5 0 0 1 5.5 13h15a1.5 1.5 0 0 1 0 3H9.189l15.813 15.407l16.453-15.983a1.5 1.5 0 1 1 2.09 2.152l-17.5 17a1.5 1.5 0 0 1-2.092-.002L7 18.056V29.5a1.5 1.5 0 0 1-3 0z");
}
</style><path class="yv3c5fbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bounce-48-filled"} {...others} />);
}

export default Component;
