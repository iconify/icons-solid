import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3q0aqb2f {
  fill: currentColor;
  d: path("M10.938 6.563Q10.5 6.125 10.5 5.5t.438-1.062T12 4t1.063.438T13.5 5.5t-.437 1.063T12 7t-1.062-.437m0 13q-.438-.438-.438-1.063t.438-1.062T12 17t1.063.438t.437 1.062t-.437 1.063T12 20t-1.062-.437");
}
</style><path class="a3q0aqb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:go-to-line-outline-rounded"} {...others} />);
}

export default Component;
