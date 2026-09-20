import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izn2dcbwr.css';
import '../../css/a/au2mywbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="izn2dcbwr"/><path class="au2mywbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:router-signal-bold"} {...others} />);
}

export default Component;
