import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0dxmwn6y.css';
import '../../css/h/h6dm1v_wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0dxmwn6y"/><path class="h6dm1v_wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:close"} {...others} />);
}

export default Component;
