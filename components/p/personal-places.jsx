import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dczps7bvt {
  fill: currentColor;
  d: path("M6 21V4h9.75q.35 0 .65.163t.5.437L20 9l-3.1 4.4q-.2.275-.5.438t-.65.162H8v7z");
}
</style><path class="dczps7bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:personal-places"} {...others} />);
}

export default Component;
