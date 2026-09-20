import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu_mmrkey {
  fill: currentColor;
  d: path("m9.55 15.192l-4.579-4.578l.713-.714l3.866 3.866L18.316 5l.713.714zM6 19v-1h12v1z");
}
</style><path class="fu_mmrkey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:download-done"} {...others} />);
}

export default Component;
