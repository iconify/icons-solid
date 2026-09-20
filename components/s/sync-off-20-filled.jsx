import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lnglpwbta {
  fill: currentColor;
  d: path("M17.938 9h-5.632l.675-2.363a.5.5 0 0 0-.962-.274l-2 7a.5.5 0 0 0 .962.274L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.363a.5.5 0 0 0 .96.274l2-7a.5.5 0 0 0-.96-.274L8.265 9H2.062a8.001 8.001 0 0 1 15.876 0");
}
</style><path class="lnglpwbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:sync-off-20-filled"} {...others} />);
}

export default Component;
