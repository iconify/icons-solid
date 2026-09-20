import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8xe1abcy.css';
import '../../css/m/mjic8l8dj.css';
import '../../css/a/ard9wdwyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8xe1abcy"/><circle class="mjic8l8dj"/><path class="ard9wdwyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:circle-layer"} {...others} />);
}

export default Component;
