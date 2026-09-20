import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnk1eyalb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnk1eyalb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pets-at-home"} {...others} />);
}

export default Component;
