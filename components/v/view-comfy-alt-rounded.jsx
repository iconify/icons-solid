import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3-moqbsi {
  fill: currentColor;
  d: path("M8.962 10H4.038q-.441 0-.74-.299T3 8.961V4.04q0-.441.299-.74t.74-.3h4.923q.44 0 .739.299t.299.74v4.923q0 .44-.299.739t-.74.299m0 11H4.04q-.441 0-.74-.299t-.3-.74V15.04q0-.441.299-.74t.74-.299h4.923q.44 0 .739.299t.299.74v4.922q0 .441-.299.74t-.74.299m11-11H15.04q-.441 0-.74-.299t-.3-.741V4.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.923q0 .44-.299.739t-.74.299m0 11H15.04q-.441 0-.74-.299t-.299-.74V15.04q0-.441.299-.74t.74-.299h4.922q.441 0 .74.299t.299.74v4.922q0 .441-.299.74t-.74.299");
}
</style><path class="r3-moqbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-comfy-alt-rounded"} {...others} />);
}

export default Component;
