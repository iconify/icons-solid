import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6knt7jxa {
  fill: currentColor;
  d: path("m12.804 15.112l-2.677-2.677q-.093-.093-.143-.2T9.935 12t.05-.235t.143-.2l2.677-2.677q.056-.055.129-.093q.073-.037.157-.037q.168 0 .289.11q.121.112.121.293v5.677q0 .182-.124.293t-.288.111q-.042 0-.284-.13");
}
</style><path class="p6knt7jxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-left-outline-rounded"} {...others} />);
}

export default Component;
