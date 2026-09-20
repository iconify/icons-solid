import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.odv875mne {
  fill: currentColor;
  d: path("M20 22V2h2v20zM2 22V2h2v20zm11-12V7h5v3zm-7 0V7h5v3zm7 7v-3h5v3zm-7 0v-3h5v3z");
}
</style><path class="odv875mne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-justify-stretch"} {...others} />);
}

export default Component;
