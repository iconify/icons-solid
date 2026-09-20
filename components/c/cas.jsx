import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkox7q6wv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rkox7q6wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cas"} {...others} />);
}

export default Component;
