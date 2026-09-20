import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.und_oy_he {
  fill: currentColor;
  d: path("m14.27 13.558l3.346-1.904V7.808l-3.347-1.904l-3.346 1.904v3.846zm-9.685 7.47L2.927 8.067l2.612-.254v10.65h12.8l.086.825zm2.954-4.566V3H21v13.462z");
}
</style><path class="und_oy_he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stack-hexagon-sharp"} {...others} />);
}

export default Component;
