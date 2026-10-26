import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vymcf1vci {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.5 16.7528L4 16.4641C2.7624 15.7496 2 14.4291 2 13C2 10.7909 3.7909 9 6 9C6 5.6863 8.6863 3 12 3C15.3137 3 18 5.6863 18 9C20.2091 9 22 10.7909 22 13C22 14.4291 21.2376 15.7496 20 16.4641L19.5 16.7528M13.7929 11.7071L9 16.5L15 16.5L10.2071 21.2929");
}
</style><path class="vymcf1vci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-lightning-sharp"} {...others} />);
}

export default Component;
