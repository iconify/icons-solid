import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye6zn_bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye6zn_bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:wall-lucca-alt-below"} {...others} />);
}

export default Component;
