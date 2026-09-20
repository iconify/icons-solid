import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x37ks3dss.css';
import '../../css/i/i8iix-ktc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x37ks3dss"/><path clip-rule="evenodd" class="i8iix-ktc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-left-detailed-fill"} {...others} />);
}

export default Component;
