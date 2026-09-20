import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wo_au3bru {
  fill: currentColor;
  d: path("M9 20v-2H3V4h8.923v1H4v12h16v-2.5h1V18h-6v2zm7.846-6.75L12.54 8.942l.688-.688l3.12 3.113V4h1v7.367l3.119-3.113l.688.688z");
}
</style><path class="wo_au3bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:install-desktop-sharp"} {...others} />);
}

export default Component;
