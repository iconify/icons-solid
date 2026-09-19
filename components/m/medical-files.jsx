import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/k/krfehbkwe.css';
import '../../css/w/wobtdmkua.css';
import '../../css/k/kut0iebfh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="krfehbkwe"/><path class="wobtdmkua"/><path class="kut0iebfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medical-files"} {...others} />);
}

export default Component;
