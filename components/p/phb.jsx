import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apatysb6u.css';
import '../../css/s/sv53ehbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apatysb6u"/><path class="sv53ehbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:phb"} {...others} />);
}

export default Component;
