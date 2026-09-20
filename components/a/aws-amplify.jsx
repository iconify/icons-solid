import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":191};
const content = `<style>.mqwepbcyu {
  d: path("M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746l100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z");
}

.sl1qm9b9s {
  stop-color: var(--svg-color--f90, #f90);
}

.wg6vaxbhd {
  stop-color: var(--svg-color--ffc300, #ffc300);
}
</style><defs><linearGradient id="SVGE1PdIdRx" x1="100%" x2="0%" y1="22.172%" y2="77.828%"><stop offset="0%" class="sl1qm9b9s"/><stop offset="100%" class="wg6vaxbhd"/></linearGradient></defs><path fill="url(#SVGE1PdIdRx)" class="mqwepbcyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:aws-amplify"} {...others} />);
}

export default Component;
