import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uaznomhfo.css';
import '../../css/c/ch2j480nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uaznomhfo"/><path class="ch2j480nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-receive3"} {...others} />);
}

export default Component;
