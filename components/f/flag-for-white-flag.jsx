import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.fp_r3zbfj {
  fill: var(--svg-color--3e4347, #3e4347);
  d: path("M6.8 15.8L24.4 64h1L7.7 15.4l.6-.2L26 64h1L9.1 14.9z");
}

.v7rul5byf {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M48.2.7c-16.6-5.2-22.4 19.4-39 14.2c3 8.3 6 16.5 9 24.8c16.6 5.2 22.4-19.4 39-14.2c-3-8.3-6-16.5-9-24.8");
}

.y-8b48hmq {
  fill: var(--svg-color--94989b, #94989b);
  d: path("m8.3 15.2l-.6.2L25.4 64h.6z");
}
</style><path class="v7rul5byf"/><path class="fp_r3zbfj"/><path class="y-8b48hmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-white-flag"} {...others} />);
}

export default Component;
