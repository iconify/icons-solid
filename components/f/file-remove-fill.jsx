import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrp_fkoog.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xrp_fkoog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-remove-fill"} {...others} />);
}

export default Component;
