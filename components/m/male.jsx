import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dogu1ji5q.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};
const content = `<path class="dogu1ji5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:male"} {...others} />);
}

export default Component;
