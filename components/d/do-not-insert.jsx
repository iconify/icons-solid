import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9wlfhxue.css';
import '../../css/y/ysqe04k0c.css';
import '../../css/p/pqckhf6dx.css';
import '../../css/e/eoxrd6gmj.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l9wlfhxue"><path class="ysqe04k0c"/><path class="pqckhf6dx"/><path class="eoxrd6gmj"/></g><path class="o0xw4kbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:do-not-insert"} {...others} />);
}

export default Component;
