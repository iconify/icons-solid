import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhavzk43w {
  fill: currentColor;
  d: path("M4 16V8h16v3.192h-5.423V16zm17.677 3l-3.715-3.71v3.21h-1v-4.923h4.923v1h-3.216l3.697 3.735z");
}
</style><path class="zhavzk43w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variable-insert"} {...others} />);
}

export default Component;
