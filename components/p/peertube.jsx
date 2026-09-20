import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7trfy.css';
import '../../css/y/yfo60c.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-tbwzce.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGOgwoJbQI"><path class="g7trfy"/><path class="yfo60c"/></mask></defs><path mask="url(#SVGOgwoJbQI)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:peertube"} {...others} />);
}

export default Component;
