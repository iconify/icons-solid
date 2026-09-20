import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plzwab3-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plzwab3-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-plus-fill"} {...others} />);
}

export default Component;
