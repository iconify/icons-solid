import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cflyrvc9a {
  fill: currentColor;
  d: path("M3.5 13q-.625 0-1.062-.437T2 11.5t.438-1.062T3.5 10h6q.625 0 1.063.438T11 11.5t-.437 1.063T9.5 13zm11 0q-.625 0-1.062-.437T13 11.5t.438-1.062T14.5 10h6q.625 0 1.063.438T22 11.5t-.437 1.063T20.5 13z");
}
</style><path class="cflyrvc9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unknown-med-outline"} {...others} />);
}

export default Component;
