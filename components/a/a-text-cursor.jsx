import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7cp6jhim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 18L3.7857 13L6.0583 6.6669C6.3743 5.782 7.6257 5.782 7.9417 6.6669L10.2143 13L12 18M10.2143 13H3.7857M19 6.8C18.6667 6.35 17.6 5 16 5M19 6.8C19.3333 6.35 20.4 5 22 5M19 6.8V17.2M19 17.2C19.3333 17.65 20.4 19 22 19M19 17.2C18.6667 17.65 17.6 19 16 19");
}
</style><path class="v7cp6jhim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:a-text-cursor"} {...others} />);
}

export default Component;
