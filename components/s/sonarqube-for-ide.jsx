import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqq5v3bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vqq5v3bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:sonarqube-for-ide"} {...others} />);
}

export default Component;
