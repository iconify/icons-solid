import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwit5_4bm.css';
import '../../css/a/a6molq-5v.css';
import '../../css/z/z75ed3b-u.css';
import '../../css/b/b4tox8bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwit5_4bm"/><path class="a6molq-5v"/><path class="z75ed3b-u"/><path class="b4tox8bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-roller-bold"} {...others} />);
}

export default Component;
