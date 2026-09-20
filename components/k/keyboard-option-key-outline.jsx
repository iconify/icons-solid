import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z6r49jtdc {
  fill: currentColor;
  d: path("M14.775 19L7.85 7H3V5h6l6.925 12H21v2zM15 7V5h6v2z");
}
</style><path class="z6r49jtdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-option-key-outline"} {...others} />);
}

export default Component;
