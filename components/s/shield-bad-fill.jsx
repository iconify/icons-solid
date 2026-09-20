import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj_14pclx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qj_14pclx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:shield-bad-fill"} {...others} />);
}

export default Component;
