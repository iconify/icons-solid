import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2vr2vnyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2vr2vnyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:filter-list-fill"} {...others} />);
}

export default Component;
