import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swysq6bsj.css';
import '../../css/o/ooafgvbkg.css';
import '../../css/w/w7x-q8b5f.css';
import '../../css/q/qt15abc2v.css';
import '../../css/p/p93clnbll.css';
import '../../css/l/l1ni_cclx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swysq6bsj"/><path class="ooafgvbkg"/><path class="w7x-q8b5f"/><path class="qt15abc2v"/><path class="p93clnbll"/><path class="l1ni_cclx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cgg"} {...others} />);
}

export default Component;
