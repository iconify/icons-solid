import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d522mlb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.5c4.25-3.25 14.25-3.25 18.5 0C17 17.75 7 17.75 2.75 14.5Zm7.25 0h4m-6.5 6l9-16m.21-.45l.38-.85l.21-.45l.48.14l1.24.37l.48.14l-.21.45l-1.48 3.1l-.21.45l-.18-.47l-.74-1.96l-.18-.47zM7.14 20.84l-.08.07l-.36.34l-.48-.14l-1.24-.37l-.48-.14l.21-.45l1.48-3.1l.21-.45l.14.48l.82 2.94l.14.48z");
}
</style><path class="d522mlb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kayak-sharp"} {...others} />);
}

export default Component;
