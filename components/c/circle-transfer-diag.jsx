import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p40sy6z0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p40sy6z0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-transfer-diag"} {...others} />);
}

export default Component;
