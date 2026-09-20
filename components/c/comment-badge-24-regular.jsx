import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inq8uwwhk {
  fill: currentColor;
  d: path("M20.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 1c.537 0 1.045-.12 1.5-.337v7.087A3.25 3.25 0 0 1 18.75 18h-5.738L8 21.75a1.25 1.25 0 0 1-1.999-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h12.087A3.5 3.5 0 0 0 17 4.5H5.25A1.75 1.75 0 0 0 3.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75h6.236a1.75 1.75 0 0 0 1.75-1.75z");
}
</style><path class="inq8uwwhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-badge-24-regular"} {...others} />);
}

export default Component;
