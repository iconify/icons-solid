import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sc0c9hqgy.css';
import '../../css/t/tkn-bnbos.css';

const viewBox = {"width":25,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sc0c9hqgy"/><path class="tkn-bnbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:eye"} {...others} />);
}

export default Component;
