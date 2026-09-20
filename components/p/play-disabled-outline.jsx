import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtu4cob9w {
  fill: currentColor;
  d: path("m15.258 13.177l-.708-.72l.692-.422l-3.257-2.131L9 6.919v-.111L17.154 12zm2.415 6.654l-4.98-4.992L9 17.192v-6.046L4.13 6.277l.709-.708l13.553 13.554zM10 15.35l1.935-1.23L10 12.184zm1.985-5.446");
}
</style><path class="gtu4cob9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:play-disabled-outline"} {...others} />);
}

export default Component;
