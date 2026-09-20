import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhon04bki.css';
import '../../css/o/ouolnv3pk.css';
import '../../css/s/sx8yv1e2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhon04bki"/><path class="ouolnv3pk"/><path class="sx8yv1e2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:openapi"} {...others} />);
}

export default Component;
