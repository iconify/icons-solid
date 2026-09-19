import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ug7-lqbej {
  fill: currentColor;
  d: path("m21.96 9.73l-1.43-5a.996.996 0 0 0-.96-.73H4.43c-.45 0-.84.3-.96.73l-1.43 5c-.18.63.3 1.27.96 1.27h2.2l-1.05 7.88a.989.989 0 1 0 1.96.26L6.67 15h10.67l.55 4.14a1 1 0 0 0 .98.86c.6 0 1.06-.53.98-1.12L18.8 11H21c.66 0 1.14-.64.96-1.27M6.93 13l.27-2h9.6l.27 2z");
}
</style><path class="ug7-lqbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-table-restaurant"} {...others} />);
}

export default Component;
