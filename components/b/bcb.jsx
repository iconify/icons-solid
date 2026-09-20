import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcxdw0blf.css';
import '../../css/b/bxxmg1bnf.css';
import '../../css/c/cf5h_9dkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="bxxmg1bnf"/><path class="cf5h_9dkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bcb"} {...others} />);
}

export default Component;
