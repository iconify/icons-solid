import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0gnzznby {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.5 16.7528L4 16.4641C2.762 15.7496 2 14.4291 2 13C2 10.7909 3.791 9 6 9C6 5.6863 8.686 3 12 3C15.314 3 18 5.6863 18 9C20.209 9 22 10.7909 22 13C22 14.4291 21.238 15.7496 20 16.4641L19.5 16.7528M8 17V20M12 19V22M16 17V20");
}
</style><path class="w0gnzznby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-drizzle-sharp-fill"} {...others} />);
}

export default Component;
