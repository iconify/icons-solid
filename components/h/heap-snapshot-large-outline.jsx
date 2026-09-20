import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_nu3_kvm {
  fill: currentColor;
  d: path("M14.5 18q.414 0 .707-.293T15.5 17t-.293-.707T14.5 16t-.707.293T13.5 17t.293.707t.707.293m-5.05-.261l5.789-5.789l-.689-.688l-5.789 5.788zM9.5 13q.414 0 .707-.293T10.5 12t-.293-.707T9.5 11t-.707.293T8.5 12t.293.707T9.5 13m-2.884 8q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z");
}
</style><path class="x_nu3_kvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:heap-snapshot-large-outline"} {...others} />);
}

export default Component;
