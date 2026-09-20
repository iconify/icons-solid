import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ammjlfgop {
  fill: currentColor;
  d: path("M9.027 8.558L11.562 3.5h.877l2.534 5.058zm2.53 11.119L3.03 9.442h8.529zm.885 0V9.442h8.53zm3.508-11.12L13.427 3.5h5.265l2.53 5.058zm-13.171 0L5.308 3.5h5.265L8.05 8.558z");
}
</style><path class="ammjlfgop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:diamond"} {...others} />);
}

export default Component;
