import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j2mq6pb3l {
  fill: currentColor;
  d: path("M30.5 7C23.596 7 18 12.596 18 19.5v1a7.5 7.5 0 0 1-7.5 7.5h-5a1.5 1.5 0 0 1 0-3h5a4.5 4.5 0 0 0 4.5-4.5v-1C15 10.94 21.94 4 30.5 4h4.25a1.5 1.5 0 0 1 0 3zm2 8a6.5 6.5 0 0 0-6.5 6.5v1C26 29.956 19.956 36 12.5 36h-7a1.5 1.5 0 0 1 0-3h7C18.299 33 23 28.299 23 22.5v-1a9.5 9.5 0 0 1 9.5-9.5h10a1.5 1.5 0 0 1 0 3zm1.5 9.364c0-.754.61-1.364 1.364-1.364H42.5a1.5 1.5 0 0 0 0-3h-7.136A4.364 4.364 0 0 0 31 24.364C31 33.552 23.552 41 14.364 41H13.5a1.5 1.5 0 0 0 0 3h.864C25.209 44 34 35.209 34 24.364");
}
</style><path class="j2mq6pb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:stream-48-filled"} {...others} />);
}

export default Component;
