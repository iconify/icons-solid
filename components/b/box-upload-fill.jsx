import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx1irjf6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fx1irjf6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-upload-fill"} {...others} />);
}

export default Component;
