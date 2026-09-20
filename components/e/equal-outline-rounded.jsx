import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ordolsvaj {
  fill: currentColor;
  d: path("M5.5 17q-.625 0-1.062-.437T4 15.5t.438-1.062T5.5 14h13q.625 0 1.063.438T20 15.5t-.437 1.063T18.5 17zm0-7q-.625 0-1.062-.437T4 8.5t.438-1.062T5.5 7h13q.625 0 1.063.438T20 8.5t-.437 1.063T18.5 10z");
}
</style><path class="ordolsvaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:equal-outline-rounded"} {...others} />);
}

export default Component;
