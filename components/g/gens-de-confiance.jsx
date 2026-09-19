import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dl07-kb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.609 9.983c3.8 0 7.601 1.259 9.525 3.151a.13.13 0 0 1 .037.086c.613 17.16-10.825 27.337-23.544 29.262a.12.12 0 0 1-.076-.012C8.658 37.978 2.318 17.664 11.816 5.565a.13.13 0 0 1 .09-.048c8.276-.6 18.422 7.027 15.879 12.114c-2.55 5.099-10.198 1.274-5.737-3.187");
}
</style><path class="dl07-kb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gens-de-confiance"} {...others} />);
}

export default Component;
