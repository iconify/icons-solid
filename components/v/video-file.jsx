import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ey35ltbhg {
  fill: currentColor;
  d: path("M9.116 17.616h4q.251 0 .433-.182t.182-.434v-1.461l1.846.972V13.49l-1.846.972V13q0-.252-.182-.434t-.433-.182h-4q-.252 0-.434.182T8.5 13v4q0 .252.182.434t.433.181M6.615 21q-.69 0-1.152-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8h4l-4-4z");
}
</style><path class="ey35ltbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-file"} {...others} />);
}

export default Component;
