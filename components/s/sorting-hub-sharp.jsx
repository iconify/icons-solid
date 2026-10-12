import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.moc_7vb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h5.5v5.5h-5.5zM8.25 12H20.5m-10.25 0l3.5-6h6.75m-10.25 6l3.5 6h6.75M18.25 3.75L20.5 6l-2.25 2.25m0 1.5L20.5 12l-2.25 2.25m0 1.5L20.5 18l-2.25 2.25");
}
</style><path class="moc_7vb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sorting-hub-sharp"} {...others} />);
}

export default Component;
