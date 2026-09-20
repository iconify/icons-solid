import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wygbw7b-c {
  fill: currentColor;
  d: path("M12 21v-9h10v9h-2v-7h-2v5h-2v-5h-2v7zm-9 0V3h6.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H21v7h-2V5h-2v3H7V5H5v14h5v2zm9.713-16.288Q13 4.425 13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5t.713-.288");
}
</style><path class="wygbw7b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-paste-sharp"} {...others} />);
}

export default Component;
