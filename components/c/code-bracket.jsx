import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzo6b5oqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzo6b5oqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:code-bracket"} {...others} />);
}

export default Component;
