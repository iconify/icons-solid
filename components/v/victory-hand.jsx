import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bx9sggcti.css';
import '../../css/y/yxx8ictdt.css';
import '../../css/c/cwkfk7b9f.css';
import '../../css/m/mlg7_-bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="bx9sggcti"/><path class="yxx8ictdt"/><path class="cwkfk7b9f"/><path class="mlg7_-bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:victory-hand"} {...others} />);
}

export default Component;
