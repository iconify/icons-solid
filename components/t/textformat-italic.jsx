import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cd_92qm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6cd_92qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:textformat-italic"} {...others} />);
}

export default Component;
