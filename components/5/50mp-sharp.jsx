import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3ecikfak {
  fill: currentColor;
  d: path("M12.5 11.5H17v-6h-4.5zM14 10V7h1.5v3zm-8 8.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18zm3.5-9.5H11V8H8V7h3V5.5H6.5V9h3v1h-3z");
}
</style><path class="u3ecikfak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:50mp-sharp"} {...others} />);
}

export default Component;
