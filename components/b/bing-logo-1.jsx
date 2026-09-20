import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/ullfkxb5f.css';
import '../../css/e/eah07vqig.css';
import '../../css/n/notak2bff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ullfkxb5f"/><path class="eah07vqig"/><path class="notak2bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bing-logo-1"} {...others} />);
}

export default Component;
