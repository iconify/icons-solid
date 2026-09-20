import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_d4z1bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r_d4z1bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:scb"} {...others} />);
}

export default Component;
