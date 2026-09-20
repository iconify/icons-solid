import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4ouod96n.css';
import '../../css/d/dcpdfk6aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4ouod96n"/><path class="dcpdfk6aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pivx"} {...others} />);
}

export default Component;
