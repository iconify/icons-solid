import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o68mh0zwm {
  fill: currentColor;
  d: path("M19.96 4.01h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2M20 6v12H4V6z");
}

.u5lf4zxyw {
  fill: currentColor;
  d: path("M18.42 9.01L7.92 6.18a.996.996 0 0 0-1.22.7l-1.85 6.87c-.14.53.17 1.08.71 1.23l10.5 2.83c.53.14 1.08-.17 1.23-.71l1.85-6.87c.13-.53-.19-1.08-.72-1.22");
}
</style><path class="o68mh0zwm"/><path class="u5lf4zxyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-video-stable"} {...others} />);
}

export default Component;
