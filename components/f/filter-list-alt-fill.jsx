import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek9th_bpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ek9th_bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:filter-list-alt-fill"} {...others} />);
}

export default Component;
