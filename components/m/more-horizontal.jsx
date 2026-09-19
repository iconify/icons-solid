import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jp89slbwl.css';
import '../../css/j/jxl67pbry.css';
import '../../css/c/cgwv8rv8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="jp89slbwl"/><circle class="jxl67pbry"/><circle class="cgwv8rv8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:more-horizontal"} {...others} />);
}

export default Component;
