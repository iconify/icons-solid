import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue1e12bsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ue1e12bsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-info-fill"} {...others} />);
}

export default Component;
