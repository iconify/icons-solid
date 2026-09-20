import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lmj59acgo {
  fill: currentColor;
  d: path("M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-3.287-.288Q9 16.426 9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17t.713-.288M16 17q.425 0 .713-.288T17 16t-.288-.712T16 15t-.712.288T15 16t.288.713T16 17M3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="lmj59acgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shelf-auto-hide-outline-sharp"} {...others} />);
}

export default Component;
