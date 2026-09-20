import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfaf48bnf.css';
import '../../css/i/ijft_pb8q.css';
import '../../css/e/es6zekb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nfaf48bnf"/><path class="ijft_pb8q"/><path class="es6zekb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:measurement-2"} {...others} />);
}

export default Component;
