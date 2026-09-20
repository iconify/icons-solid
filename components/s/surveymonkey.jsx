import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1fb5gb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1fb5gb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:surveymonkey"} {...others} />);
}

export default Component;
