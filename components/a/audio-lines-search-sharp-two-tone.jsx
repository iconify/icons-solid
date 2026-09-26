import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fovjptbcu {
  stroke-opacity: 0.4;
  d: path("M4 9L4 14L4 15M8 5L8 18L8 19M12 2L12 12.8097L12 13.8097M16 6L16 11.0192L16 12.0192M20 9L20 12.0225L20 13.0225");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ydo674bvp {
  d: path("M19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15C17.8807 15 19 16.1193 19 17.5ZM18.2678 19.2678L20.2929 21.2929");
}
</style><g class="gp_8x1bzb"><path class="fovjptbcu"/><path class="ydo674bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-search-sharp-two-tone"} {...others} />);
}

export default Component;
