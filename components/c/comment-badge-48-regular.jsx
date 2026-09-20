import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k0zbm6bbt {
  fill: currentColor;
  d: path("M34.675 6a7 7 0 0 0-.655 2.5H11.25a4.75 4.75 0 0 0-4.75 4.75v15.5a4.75 4.75 0 0 0 4.75 4.75h3.25v7.838L25.604 33.5H36.75a4.75 4.75 0 0 0 4.75-4.75V15.98a7 7 0 0 0 2.5-.655V28.75A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.058 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75v-15.5A7.25 7.25 0 0 1 11.25 6zM41 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10");
}
</style><path class="k0zbm6bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-badge-48-regular"} {...others} />);
}

export default Component;
