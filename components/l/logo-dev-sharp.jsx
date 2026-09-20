import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6dm-pbkr {
  fill: currentColor;
  d: path("M6 15h2.8l.75-.75v-4.5L8.8 9H6zm1.15-1.15v-3.7H8.4v3.7zm4.125 0v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-3.2v6h3.2v-1.15zm4.75-.75L14.95 9h-1.2l1.575 5.975h1.4L18.3 9h-1.2zM3 21V3h18v18z");
}
</style><path class="t6dm-pbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:logo-dev-sharp"} {...others} />);
}

export default Component;
