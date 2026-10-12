import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ag7ixhbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.25V2.75m-3.25 18.5h6.5m-2.5-18.5h12l-.43.61l-2.14 3.03l-.43.61l.43.61l2.14 3.03l.43.61H8v-8.5z");
}
</style><path class="ag7ixhbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:destination-flag-sharp"} {...others} />);
}

export default Component;
