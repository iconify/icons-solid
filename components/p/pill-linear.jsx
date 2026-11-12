import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmgzojbvz {
  d: path("M16.8057 7.19434C16.8057 7.19434 16.2649 9.99999 13.1322 13.1327C9.99952 16.2653 7.19434 16.8057 7.19434 16.8057");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ruvkviflg {
  d: path("M20.0094 20.0094C17.3553 22.6635 13.0522 22.6635 10.3981 20.0094L3.99057 13.6019C1.33648 10.9478 1.33648 6.64466 3.99057 3.99057C6.64466 1.33648 10.9478 1.33648 13.6019 3.99057L20.0094 10.3981C22.6635 13.0522 22.6635 17.3553 20.0094 20.0094Z");
}
</style><g class="ipq1z-bjh"><path class="ruvkviflg"/><path class="dmgzojbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pill-linear"} {...others} />);
}

export default Component;
