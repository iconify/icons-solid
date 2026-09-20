import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdxb9g3oh.css';
import '../../css/g/gb0c95-cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdxb9g3oh"/><path class="gb0c95-cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:master-card"} {...others} />);
}

export default Component;
