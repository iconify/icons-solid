import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w7bszxk7v {
  fill: currentColor;
  d: path("M9 11.5h6q.214 0 .357-.143T15.5 11t-.143-.357T15 10.5H9q-.213 0-.357.143T8.5 11t.143.357T9 11.5M4.616 18q-.691 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v1.192q0 .349-.23.578t-.578.23H9.808q-.348 0-.578-.23T9 19.192V18z");
}
</style><path class="w7bszxk7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:remove-from-queue-rounded"} {...others} />);
}

export default Component;
