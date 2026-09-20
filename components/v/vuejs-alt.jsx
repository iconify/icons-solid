import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze6v68axo.css';
import '../../css/r/rii9k4bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze6v68axo"/><path class="rii9k4bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vuejs-alt"} {...others} />);
}

export default Component;
