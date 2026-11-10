import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfzc6wbvm.css';
import '../../css/k/k0pfecbhp.css';
import '../../css/c/cvhnd3b0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zfzc6wbvm"/><path class="k0pfecbhp"/><path class="cvhnd3b0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:background-blur"} {...others} />);
}

export default Component;
