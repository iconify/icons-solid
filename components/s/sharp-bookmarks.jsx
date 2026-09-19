import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwzrstbgk {
  fill: currentColor;
  d: path("m19 18l2 1V1H7v2h12zM17 5H3v18l7-3l7 3z");
}
</style><path class="jwzrstbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-bookmarks"} {...others} />);
}

export default Component;
