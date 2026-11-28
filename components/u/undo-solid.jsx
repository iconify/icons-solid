import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij0gr3wtk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij0gr3wtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:undo-solid"} {...others} />);
}

export default Component;
