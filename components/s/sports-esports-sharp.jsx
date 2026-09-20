import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cose7eblh {
  fill: currentColor;
  d: path("m1.625 19l1.95-14h16.85l1.95 14H18.4l-3-3H8.6l-3 3zm16.088-6.288Q18 12.425 18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13t.713-.288M15 10q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75z");
}
</style><path class="cose7eblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sports-esports-sharp"} {...others} />);
}

export default Component;
