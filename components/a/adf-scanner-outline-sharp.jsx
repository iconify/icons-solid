import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pa9gqobck {
  fill: currentColor;
  d: path("M2 20v-8h4V4h12v8h4v8zm6-8h8V6H8zm-4 6h16v-4H4zm14-1q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17M4 14h16z");
}
</style><path class="pa9gqobck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:adf-scanner-outline-sharp"} {...others} />);
}

export default Component;
