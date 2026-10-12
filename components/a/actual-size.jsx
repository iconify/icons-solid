import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh5trphtn.css';
import '../../css/e/exxq6kbnv.css';
import '../../css/s/sp_nd288j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="oh5trphtn"/><rect class="exxq6kbnv"/><path class="sp_nd288j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:actual-size"} {...others} />);
}

export default Component;
