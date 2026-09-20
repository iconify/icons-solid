import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/khvchvbjy.css';
import '../../css/r/rxrul0eko.css';
import '../../css/k/kkh-o2bqv.css';
import '../../css/m/mu7hqhcsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="khvchvbjy"/><path class="rxrul0eko"/><path class="kkh-o2bqv"/><path class="mu7hqhcsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-check"} {...others} />);
}

export default Component;
