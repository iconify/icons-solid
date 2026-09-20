import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzvuledvc.css';
import '../../css/f/f-mdbm9ye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzvuledvc"/><path class="f-mdbm9ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:code4"} {...others} />);
}

export default Component;
