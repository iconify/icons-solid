import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htb400b2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 12.25l-.75-7m3.5 7l.75-5.5m2.5 5.5v-8.5h8.25v8.5m-16.5 0h18.5v9H2.75zm7 0v9");
}
</style><path class="htb400b2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:desk-organizer-sharp"} {...others} />);
}

export default Component;
