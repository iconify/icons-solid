import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uz43wjbwe {
  fill: currentColor;
  d: path("M4 18h16v-8h-7V6H4zm-1 1V5h18v14zm1-1V6z");
}
</style><path class="uz43wjbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-outline-sharp"} {...others} />);
}

export default Component;
