import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1qzedbqz {
  fill: currentColor;
  d: path("M12 11H6V7H4v10h2v-4h6v4h2V7h-2zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2z");
}
</style><path class="f1qzedbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-h-plus-mobiledata"} {...others} />);
}

export default Component;
