import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it_ryvbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="it_ryvbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:disability-qcc-line"} {...others} />);
}

export default Component;
