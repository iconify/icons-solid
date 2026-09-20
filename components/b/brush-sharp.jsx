import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mgscfk0fz {
  fill: currentColor;
  d: path("M6.385 19.616q-.587 0-1.168-.204q-.58-.204-1.025-.566q.496-.327.844-.878t.349-1.352q0-.847.577-1.424q.577-.576 1.423-.576t1.423.576t.577 1.424q0 1.246-.877 2.123t-2.123.877M11.25 14.5l-1.711-1.711l8.88-8.881l1.712 1.711z");
}
</style><path class="mgscfk0fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:brush-sharp"} {...others} />);
}

export default Component;
