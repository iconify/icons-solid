import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmqwoqbsr {
  fill: currentColor;
  d: path("M18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 22L21.975 2.025V12.65q-.675-.4-1.437-.588T19 11.875q-2.55 0-4.337 1.788T12.875 18q0 1.15.375 2.138T14.375 22z");
}
</style><path class="mmqwoqbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-add"} {...others} />);
}

export default Component;
