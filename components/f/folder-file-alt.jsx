import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/ug0kw7bmc.css';
import '../../css/w/wv316tb1s.css';
import '../../css/e/eq1q-8bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ug0kw7bmc"/><path class="wv316tb1s"/><path class="eq1q-8bmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-file-alt"} {...others} />);
}

export default Component;
