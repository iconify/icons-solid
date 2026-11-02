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

.pf0dmqbro {
  d: path("M3 3h12v10H7l-4 4z");
}

.vgn94z9bb {
  stroke-opacity: 0.4;
  d: path("M19 9h2v12l-4-4H9");
}
</style><g class="nrj6p8qat"><path class="vgn94z9bb"/><path class="pf0dmqbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-conversation-duocolor-sharp"} {...others} />);
}

export default Component;
