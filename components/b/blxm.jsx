import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybxut3bqm.css';
import '../../css/q/qapg4nbep.css';
import '../../css/a/ajilzybch.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ybxut3bqm"/><path clip-rule="evenodd" class="qapg4nbep"/><path class="ajilzybch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:blxm"} {...others} />);
}

export default Component;
