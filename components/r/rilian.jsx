import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgbqp99xv.css';
import '../../css/i/im5jjgb5i.css';
import '../../css/m/mt8lf6r6u.css';
import '../../css/i/iwgtfseba.css';

const viewBox = {"width":16.22,"height":18};
const content = `<g class="bgbqp99xv"><path class="im5jjgb5i"/><path class="mt8lf6r6u"/><path class="iwgtfseba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rilian"} {...others} />);
}

export default Component;
