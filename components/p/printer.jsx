import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/quanm-3dx.css';
import '../../css/c/c1r51-bdj.css';
import '../../css/q/qfs5l7bnn.css';
import '../../css/e/e79_7bc6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="quanm-3dx"/><path class="c1r51-bdj"/><path class="qfs5l7bnn"/><path class="e79_7bc6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:printer"} {...others} />);
}

export default Component;
