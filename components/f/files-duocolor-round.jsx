import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9-xx3bie {
  d: path("M8 6H7a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-6M8 6l5 5M8 6v4a1 1 0 0 0 1 1h4");
}

.id9crk2kl {
  stroke-opacity: 0.4;
  d: path("M11 3h5m0 0l5 5m-5-5v4a1 1 0 0 0 1 1h4m0 0v6a4 4 0 0 1-4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="id9crk2kl"/><path class="a9-xx3bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:files-duocolor-round"} {...others} />);
}

export default Component;
