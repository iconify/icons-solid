import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lq89_e-dj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 21V8a5 5 0 0 1 10 0v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1");
}

.tn1b0cbus {
  d: path("m12.448 7.106l7.999 4A1 1 0 0 1 21 12v8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h8v-2H4a1 1 0 0 1 0-2h7v-2H4a1 1 0 0 1 0-2h7V8a1 1 0 0 1 1.447-.894ZM13 20h6v-7.382l-6-3Z");
}
</style><g class="cuyn6tgcc"><path class="lq89_e-dj"/><path class="tn1b0cbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:silo-bulk-sharp"} {...others} />);
}

export default Component;
