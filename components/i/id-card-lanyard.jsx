import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o__r8c3tm.css';
import '../../css/a/avjkn5b5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o__r8c3tm"/><path class="avjkn5b5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:id-card-lanyard"} {...others} />);
}

export default Component;
