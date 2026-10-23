import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2v51xbxf.css';
import '../../css/t/t4j8dhcst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j2v51xbxf"/><path class="t4j8dhcst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tablet-smartphone"} {...others} />);
}

export default Component;
