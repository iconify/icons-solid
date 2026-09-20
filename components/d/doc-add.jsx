import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22pcbcyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z22pcbcyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:doc-add"} {...others} />);
}

export default Component;
