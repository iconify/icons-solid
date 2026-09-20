import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw2op4c-x.css';
import '../../css/o/ontf7ialn.css';
import '../../css/y/y8_pmfp-n.css';
import '../../css/f/fqns7tbpi.css';
import '../../css/f/fehi9oj7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pw2op4c-x"/><path class="ontf7ialn"/><path class="y8_pmfp-n"/><path class="fqns7tbpi"/><path class="fehi9oj7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ator"} {...others} />);
}

export default Component;
