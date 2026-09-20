import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dsfjocb8w {
  d: path("m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32M32 200L46.33 80h163.42l14.17 120Z");
}

.yvw54rb7g {
  d: path("M223.92 208H32.08a8 8 0 0 1-8-8.93l14.25-120a8.06 8.06 0 0 1 8-7.07h163.34a8.06 8.06 0 0 1 8 7.07l14.25 120a8 8 0 0 1-8 8.93");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="yvw54rb7g"/><path class="dsfjocb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:handbag-simple-duotone"} {...others} />);
}

export default Component;
