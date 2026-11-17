import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flmj0fb7o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m7-5h5l-1 1H9zm-2 4h6l2 2h-6zm2 5h5l-1 1H9z");
}

.ft5dv1b6b {
  fill: none;
}

.xl2f12bef {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9m3-14h-5L9 8h5Zm-1 4H8l2 2h6Zm1 5h-5l-1 1h5Z");
}
</style><g class="ft5dv1b6b"><path class="xl2f12bef"/><path class="flmj0fb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-currency-solana-duotone-round"} {...others} />);
}

export default Component;
