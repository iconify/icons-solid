import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kx1cg1b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.728 28.017c.777.381-.178 2.275-1.441 3.543c-4.385 4.403-9.8 7.413-16.141 7.887c-13.327.997-14.681-11.803-9.096-18.093c5.31-5.982 13.69-10.568 23.923-12.492c19.49-3.665-6.252 21.651-17.651 17.262c-.793-.3-.517-1.436.652-1.367c5.84.343 11.776-3.307 18.304-11.121c.735-.88 5.37-6.278-10.856 1.562c-20.26 9.79-13.676 28.275 8.3 15.208c2.731-1.624 3.658-2.557 4.005-2.387z");
}
</style><path class="kx1cg1b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:formula-e"} {...others} />);
}

export default Component;
