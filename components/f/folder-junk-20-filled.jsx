import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fpm9fwdvm {
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm2.803 2.404l-4.9 4.9a3.5 3.5 0 0 0 5.025-4.72l-.125-.18zM15.5 4.5a2.5 2.5 0 0 1 2.479 2.174l.016.162L18 7v3.257a5.5 5.5 0 0 0-8.522 6.49L9.6 17H4.5a2.5 2.5 0 0 1-2.495-2.336L2 14.5v-7h5.07c.36 0 .706-.13.977-.361l.111-.106L10.565 4.5H15.5zm-1 6.5a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11zM7.167 3c.27 0 .535.073.765.21l.135.09l1.319.99l-1.953 2.054a.5.5 0 0 1-.281.15l-.081.006H2v-1a2.5 2.5 0 0 1 2.336-2.495L4.5 3h2.667z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="fpm9fwdvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:folder-junk-20-filled"} {...others} />);
}

export default Component;
