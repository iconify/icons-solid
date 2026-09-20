import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw3e4gbql {
  fill: currentColor;
  d: path("M4.425 22q-.675 0-.937-.612T3.7 20.3L20.3 3.7q.475-.475 1.088-.213t.612.938V20.5q0 .625-.437 1.063T20.5 22zm2.4-2H20V6.85z");
}
</style><path class="zw3e4gbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-null-rounded"} {...others} />);
}

export default Component;
