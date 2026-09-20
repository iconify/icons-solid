import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcg8cukwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qcg8cukwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cursor-square-filled"} {...others} />);
}

export default Component;
