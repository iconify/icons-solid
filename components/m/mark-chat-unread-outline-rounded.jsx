import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnb3mvbqq {
  fill: currentColor;
  d: path("m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h9q.425 0 .713.288T14 3t-.288.713T13 4H4v13.125L5.15 16H20V9q0-.425.288-.712T21 8t.713.288T22 9v7q0 .825-.587 1.413T20 18zM16.875 5.125Q16 4.25 16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6t-2.125-.875M4 4v12z");
}
</style><path class="bnb3mvbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-chat-unread-outline-rounded"} {...others} />);
}

export default Component;
