import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qdy_ubbsn {
  stroke-opacity: 0.4;
  d: path("M12 8a2 2 0 1 1 0-4m0 0a2 2 0 1 1 0 4");
}

.vrnelsbwr {
  d: path("M12 8h3c.882 0 1.706.825 2 2l2 8c.254 1.016-.238 2-1 2H6c-.762 0-1.254-.984-1-2l2-8c.294-1.175 1.118-2 2-2z");
}
</style><g class="nrj6p8qat"><path class="qdy_ubbsn"/><path class="vrnelsbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:weight-duocolor"} {...others} />);
}

export default Component;
