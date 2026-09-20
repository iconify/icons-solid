import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfnktqj5r {
  d: path("M19.75 4A2.25 2.25 0 0 1 22 6.25v11.5A2.25 2.25 0 0 1 19.75 20H4.25A2.25 2.25 0 0 1 2 17.75V6.25A2.25 2.25 0 0 1 4.25 4zM12 7.245a.75.75 0 0 0-.53.22L8.22 10.72a.75.75 0 0 0 1.06 1.06l1.97-1.972v6.445a.75.75 0 1 0 1.5 0V9.806l1.974 1.974a.75.75 0 1 0 1.06-1.06L12.53 7.465a.75.75 0 0 0-.53-.22z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="yfnktqj5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:share-screen-24-filled"} {...others} />);
}

export default Component;
