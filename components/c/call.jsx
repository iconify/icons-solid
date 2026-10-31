import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gnv7fccfh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yh37zgbbk.css';
import '../../css/h/hu2sydbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gnv7fccfh"/><g class="mc2zb0bvp"><circle class="yh37zgbbk"/><path class="hu2sydbrb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:call"} {...others} />);
}

export default Component;
