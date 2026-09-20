import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fftuk_bwd.css';
import '../../css/a/ascdhq43i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fftuk_bwd"/><path class="ascdhq43i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-global-warming-globe"} {...others} />);
}

export default Component;
