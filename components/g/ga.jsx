import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lpmwpmbjx.css';
import '../../css/g/gofpikhwp.css';
import '../../css/y/ydhv3dbut.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lpmwpmbjx"/><path class="gofpikhwp"/><path class="ydhv3dbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ga"} {...others} />);
}

export default Component;
