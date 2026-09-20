import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc111xaga.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kc111xaga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:oeth"} {...others} />);
}

export default Component;
