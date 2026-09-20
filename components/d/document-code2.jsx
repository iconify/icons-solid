import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/syw2rdbdu.css';
import '../../css/m/mnw8fwi5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="syw2rdbdu"/><path class="mnw8fwi5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-code2"} {...others} />);
}

export default Component;
