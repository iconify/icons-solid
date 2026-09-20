import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nni06yb3c.css';
import '../../css/j/jbo3hqjeo.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/g/gd_ri2pyu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nni06yb3c"/><path clip-rule="evenodd" class="jbo3hqjeo"/><path class="wzw7k-iny"/><path class="gd_ri2pyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:button-record-1"} {...others} />);
}

export default Component;
