import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp8fatbpd.css';
import '../../css/d/dlc29abjm.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="gp8fatbpd"/><path class="dlc29abjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-current-location"} {...others} />);
}

export default Component;
