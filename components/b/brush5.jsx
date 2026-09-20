import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ta3nfdcyf.css';
import '../../css/q/qeq4udb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ta3nfdcyf"/><path class="qeq4udb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brush5"} {...others} />);
}

export default Component;
