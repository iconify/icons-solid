import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r1nxohbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 19L7 5L12 19M3.7857 14L10.2143 14M19 5.8C18.6667 5.35 17.6 4 16 4M19 5.8C19.3333 5.35 20.4 4 22 4M19 5.8L19 18.2M19 18.2C19.3333 18.65 20.4 20 22 20M19 18.2C18.6667 18.65 17.6 20 16 20");
}
</style><path class="r1nxohbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:a-text-cursor-fill"} {...others} />);
}

export default Component;
