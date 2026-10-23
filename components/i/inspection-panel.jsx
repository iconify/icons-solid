import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbc2rh_nz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbc2rh_nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:inspection-panel"} {...others} />);
}

export default Component;
