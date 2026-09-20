import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gz9h8zqkj.css';
import '../../css/i/i18b5wbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="gz9h8zqkj"/><path class="i18b5wbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elastic-logo"} {...others} />);
}

export default Component;
