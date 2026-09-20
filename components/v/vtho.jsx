import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2vpf0b8u {
  fill: var(--svg-color--2a5285, #2a5285);
  d: path("M6.316 12.947L10.166 3h5.152l-4.4 7.105h3.936L6.808 21l3.358-8.053z");
}

.ft5dv1b6b {
  fill: none;
}

.wph_fybml {
  fill: var(--svg-color--c1cddc, #c1cddc);
  d: path("M17.684 3H15.22l-5.646 7.796h1.772L6.828 21l10.42-11.842h-4.414z");
}
</style><g class="ft5dv1b6b"><path class="wph_fybml"/><path class="e2vpf0b8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vtho"} {...others} />);
}

export default Component;
