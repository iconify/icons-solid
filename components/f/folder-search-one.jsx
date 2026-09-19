import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gpbfd-bbj.css';
import '../../css/d/ds9nz3qrr.css';
import '../../css/x/xj9-7bcyf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="gpbfd-bbj"/><circle class="ds9nz3qrr"/><path class="xj9-7bcyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-search-one"} {...others} />);
}

export default Component;
