import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/np9zh6bil.css';
import '../../css/y/yypy0t5nz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="np9zh6bil"/><path class="yypy0t5nz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cloud-backup"} {...others} />);
}

export default Component;
