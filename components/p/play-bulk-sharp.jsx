import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nyodkpvwy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.496 3.132l14 8a.999.999 0 0 1 0 1.736l-14 8A1 1 0 0 1 5 20V4a1 1 0 0 1 1.496-.868");
}
</style><path class="nyodkpvwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-bulk-sharp"} {...others} />);
}

export default Component;
