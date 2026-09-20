import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf1a2zbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rf1a2zbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-remove"} {...others} />);
}

export default Component;
