import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbs-x1etz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dbs-x1etz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dxl"} {...others} />);
}

export default Component;
