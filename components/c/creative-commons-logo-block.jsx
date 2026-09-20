import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd49lac2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qd49lac2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:creative-commons-logo-block"} {...others} />);
}

export default Component;
