import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyy73i5ku.css';
import '../../css/e/e_vnnobll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyy73i5ku"/><path class="e_vnnobll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:github"} {...others} />);
}

export default Component;
