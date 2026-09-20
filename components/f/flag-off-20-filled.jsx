import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.mtpeitfnd {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 1 0V13h7.293l4.853 4.854a.5.5 0 0 0 .708-.708zM16.5 13h-1.379l-10-10H16.5a.5.5 0 0 1 .416.777L14.101 8l2.815 4.223A.5.5 0 0 1 16.5 13");
}
</style><path class="mtpeitfnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flag-off-20-filled"} {...others} />);
}

export default Component;
