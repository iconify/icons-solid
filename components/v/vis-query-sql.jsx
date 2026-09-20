import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8s6xvu0y.css';
import '../../css/c/cmb2wab2t.css';
import '../../css/g/g00s9kkvw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w8s6xvu0y"/><path class="cmb2wab2t"/><path clip-rule="evenodd" class="g00s9kkvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-query-sql"} {...others} />);
}

export default Component;
