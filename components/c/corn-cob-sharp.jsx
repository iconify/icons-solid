import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k6abpibvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.5 0 4 2.5 4 6.5v4.25H8V9.25c0-4 1.5-6.5 4-6.5ZM8 7h8m-8 3h8m-4 11.25C6.5 20.5 3.5 17 2.75 11.5c3.25 2 6.75 5 9.25 9.75Zm0 0c5.5-.75 8.5-4.25 9.25-9.75c-3.25 2-6.75 5-9.25 9.75Z");
}
</style><path class="k6abpibvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corn-cob-sharp"} {...others} />);
}

export default Component;
