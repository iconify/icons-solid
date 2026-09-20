import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8n3guxzd.css';
import '../../css/i/i6o7bob-u.css';
import '../../css/r/rqbxhyegq.css';
import '../../css/k/kcxdw0blf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8n3guxzd"/><path class="i6o7bob-u"/><path class="rqbxhyegq"/><path clip-rule="evenodd" class="kcxdw0blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gns"} {...others} />);
}

export default Component;
